var React = require('react');
var $ = require('jquery');
var Issue = require('./issue')
var IssueColumn = React.createClass({
	dragover: function (e) {
		console.log('over me')
      if (e.preventDefault) e.preventDefault(); // allows us to drop
      $(e.currentTarget).removeClass("over").addClass('over');
      e.dataTransfer.dropEffect = 'move';
      return false;
  },
	drop: function (e) {
    e.stopPropagation();
		console.log('drop',e.dataTransfer.getData('text/plain'))
    var column = e.currentTarget;
    var $issue = $('#issue-' + e.dataTransfer.getData('text/plain'));
    this.props.g.deleteLabel($issue.data('issue-id'), $issue.data('label'))
      .then(function (labels) {
        this.props.g.addLabel($issue.attr('id'), _(labels).pluck('name').concat(column.id));
      });
    $(e.currentTarget).removeClass("over")
      .find('span.lbl')
      .append($($issue));
    return false;
  },
	render: function(){
		var issueNodes = this.props.issues.map((issue) => {
			return (
				<Issue labels={issue.labels} name={issue.name} number={issue.number} url={issue.html_url} title={issue.title} repo={this.props.repo} owner={this.props.owner} label={this.props.columnName}/>
			)
		})
		return (
			<div id={this.props.columnName} className="table-column" onDrop={this.drop} onDragOver={this.dragover}>
				<span className="num hide-buttons">{this.props.columnName}
					<a href="#" data={this.props.columnName} type="button" className="remove-lane">
						<span className="octicon octicon-remove-close close"></span>
					</a>
				</span>
				<span className="lbl">
					{issueNodes}
				</span>
			</div>
		)
	}
});
module.exports = IssueColumn;

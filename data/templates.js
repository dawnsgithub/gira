(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["data/templates/gira.html"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<style media=\"screen\" type=\"text/css\">\n  span.labelstyle-e11d21, .linked-labelstyle-e11d21 {  background-color: #e11d21 !important;  color: #fff !important;}.labelstyle-e11d21.selected {  background-color: #e11d21 !important;  color: #fff !important;}.label-select-menu .labelstyle-e11d21.selected {  background:rgba(225, 29, 33, 0.12) !important;  color: #991316 !important;}\n\nspan.labelstyle-eb6420, .linked-labelstyle-eb6420 {  background-color: #eb6420 !important;  color: #fff !important;}.labelstyle-eb6420.selected {  background-color: #eb6420 !important;  color: #fff !important;}.label-select-menu .labelstyle-eb6420.selected {  background:rgba(235, 100, 32, 0.12) !important;  color: #994114 !important;}\n\nspan.labelstyle-fbca04, .linked-labelstyle-fbca04 {  background-color: #fbca04 !important;  color: #332900 !important;}.labelstyle-fbca04.selected {  background-color: #fbca04 !important;  color: #332900 !important;}.label-select-menu .labelstyle-fbca04.selected {  background:rgba(251, 202, 4, 0.12) !important;  color: #997b02 !important;}\n\nspan.labelstyle-009800, .linked-labelstyle-009800 {  background-color: #009800 !important;  color: #fff !important;}.labelstyle-009800.selected {  background-color: #009800 !important;  color: #fff !important;}.label-select-menu .labelstyle-009800.selected {  background:rgba(0, 152, 0, 0.12) !important;  color: #009900 !important;}\n\nspan.labelstyle-006b75, .linked-labelstyle-006b75 {  background-color: #006b75 !important;  color: #fff !important;}.labelstyle-006b75.selected {  background-color: #006b75 !important;  color: #fff !important;}.label-select-menu .labelstyle-006b75.selected {  background:rgba(0, 107, 117, 0.12) !important;  color: #008b99 !important;}\n\nspan.labelstyle-207de5, .linked-labelstyle-207de5 {  background-color: #207de5 !important;  color: #fff !important;}.labelstyle-207de5.selected {  background-color: #207de5 !important;  color: #fff !important;}.label-select-menu .labelstyle-207de5.selected {  background:rgba(32, 125, 229, 0.12) !important;  color: #155399 !important;}\n\nspan.labelstyle-0052cc, .linked-labelstyle-0052cc {  background-color: #0052cc !important;  color: #fff !important;}.labelstyle-0052cc.selected {  background-color: #0052cc !important;  color: #fff !important;}.label-select-menu .labelstyle-0052cc.selected {  background:rgba(0, 82, 204, 0.12) !important;  color: #003d99 !important;}\n\nspan.labelstyle-5319e7, .linked-labelstyle-5319e7 {  background-color: #5319e7 !important;  color: #fff !important;}.labelstyle-5319e7.selected {  background-color: #5319e7 !important;  color: #fff !important;}.label-select-menu .labelstyle-5319e7.selected {  background:rgba(83, 25, 231, 0.12) !important;  color: #361099 !important;}\n\nspan.labelstyle-f7c6c7, .linked-labelstyle-f7c6c7 {  background-color: #f7c6c7 !important;  color: #332829 !important;}.labelstyle-f7c6c7.selected {  background-color: #f7c6c7 !important;  color: #332829 !important;}.label-select-menu .labelstyle-f7c6c7.selected {  background:rgba(247, 198, 199, 0.12) !important;  color: #997a7b !important;}\n\nspan.labelstyle-fad8c7, .linked-labelstyle-fad8c7 {  background-color: #fad8c7 !important;  color: #332c28 !important;}.labelstyle-fad8c7.selected {  background-color: #fad8c7 !important;  color: #332c28 !important;}.label-select-menu .labelstyle-fad8c7.selected {  background:rgba(250, 216, 199, 0.12) !important;  color: #988479 !important;}\n\nspan.labelstyle-fef2c0, .linked-labelstyle-fef2c0 {  background-color: #fef2c0 !important;  color: #333026 !important;}.labelstyle-fef2c0.selected {  background-color: #fef2c0 !important;  color: #333026 !important;}.label-select-menu .labelstyle-fef2c0.selected {  background:rgba(254, 242, 192, 0.12) !important;  color: #989173 !important;}\n\nspan.labelstyle-bfe5bf, .linked-labelstyle-bfe5bf {  background-color: #bfe5bf !important;  color: #2a332a !important;}.labelstyle-bfe5bf.selected {  background-color: #bfe5bf !important;  color: #2a332a !important;}.label-select-menu .labelstyle-bfe5bf.selected {  background:rgba(191, 229, 191, 0.12) !important;  color: #7f997f !important;}\n\nspan.labelstyle-bfdadc, .linked-labelstyle-bfdadc {  background-color: #bfdadc !important;  color: #2c3233 !important;}.labelstyle-bfdadc.selected {  background-color: #bfdadc !important;  color: #2c3233 !important;}.label-select-menu .labelstyle-bfdadc.selected {  background:rgba(191, 218, 220, 0.12) !important;  color: #849799 !important;}\n\nspan.labelstyle-c7def8, .linked-labelstyle-c7def8 {  background-color: #c7def8 !important;  color: #282d33 !important;}.labelstyle-c7def8.selected {  background-color: #c7def8 !important;  color: #282d33 !important;}.label-select-menu .labelstyle-c7def8.selected {  background:rgba(199, 222, 248, 0.12) !important;  color: #7a8898 !important;}\n\nspan.labelstyle-bfd4f2, .linked-labelstyle-bfd4f2 {  background-color: #bfd4f2 !important;  color: #282c33 !important;}.labelstyle-bfd4f2.selected {  background-color: #bfd4f2 !important;  color: #282c33 !important;}.label-select-menu .labelstyle-bfd4f2.selected {  background:rgba(191, 212, 242, 0.12) !important;  color: #788699 !important;}\n\nspan.labelstyle-d4c5f9, .linked-labelstyle-d4c5f9 {  background-color: #d4c5f9 !important;  color: #2b2833 !important;}.labelstyle-d4c5f9.selected {  background-color: #d4c5f9 !important;  color: #2b2833 !important;}.label-select-menu .labelstyle-d4c5f9.selected {  background:rgba(212, 197, 249, 0.12) !important;  color: #827999 !important;}\n\nspan.labelstyle-fc2929, .linked-labelstyle-fc2929 {  background-color: #fc2929 !important;  color: #fff !important;}.labelstyle-fc2929.selected {  background-color: #fc2929 !important;  color: #fff !important;}.label-select-menu .labelstyle-fc2929.selected {  background:rgba(252, 41, 41, 0.12) !important;  color: #991818 !important;}\n\nspan.labelstyle-cccccc, .linked-labelstyle-cccccc {  background-color: #cccccc !important;  color: #333333 !important;}.labelstyle-cccccc.selected {  background-color: #cccccc !important;  color: #333333 !important;}.label-select-menu .labelstyle-cccccc.selected {  background:rgba(204, 204, 204, 0.12) !important;  color: #999999 !important;}\n\nspan.labelstyle-84b6eb, .linked-labelstyle-84b6eb {  background-color: #84b6eb !important;  color: #1c2733 !important;}.labelstyle-84b6eb.selected {  background-color: #84b6eb !important;  color: #1c2733 !important;}.label-select-menu .labelstyle-84b6eb.selected {  background:rgba(132, 182, 235, 0.12) !important;  color: #557699 !important;}\n\nspan.labelstyle-e6e6e6, .linked-labelstyle-e6e6e6 {  background-color: #e6e6e6 !important;  color: #333333 !important;}.labelstyle-e6e6e6.selected {  background-color: #e6e6e6 !important;  color: #333333 !important;}.label-select-menu .labelstyle-e6e6e6.selected {  background:rgba(230, 230, 230, 0.12) !important;  color: #999999 !important;}\n\nspan.labelstyle-cc317c, .linked-labelstyle-cc317c {  background-color: #cc317c !important;  color: #fff !important;}.labelstyle-cc317c.selected {  background-color: #cc317c !important;  color: #fff !important;}.label-select-menu .labelstyle-cc317c.selected {  background:rgba(204, 49, 124, 0.12) !important;  color: #99245c !important;}\n\nspan.labelstyle-ffffff, .linked-labelstyle-ffffff {  background-color:\n#ffffff !important;  color: #333333\n!important;}.labelstyle-ffffff.selected {  background-color: #ffffff\n!important;  color: #333333 !important;}.label-select-menu\n.labelstyle-ffffff.selected {  background:rgba(255, 255, 255, 0.12)\n!important;  color: #999999 !important;}\n#contributions-calendar .contrib-details span.lbl div.blankslate {\n    border-left: 1px solid #DDD;\nmargin:5px;\n}\n</style>\n<div class=\"box box-small\">\n  <div class=\"box-header\">\n    <h3 class=\"box-title\">GIRA</h3>\n  </div>\n  <div class=\"box-body\">\n    <div id=\"contributions-calendar\">\n      <div class=\"contrib-details grid\">\n\t\t\t\t";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "milestones");
if(t_3) {for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("milestone", t_4);
output += "\n        <div class=\"col\" id=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id", env.autoesc), env.autoesc);
output += "\">\n          <span class=\"num\"\n\t\t\t\t\t\t\t\tid=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"id", env.autoesc), env.autoesc);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title", env.autoesc), env.autoesc);
output += "</span>";
output += runtime.suppressValue(runtime.memberLookup((t_4),"description", env.autoesc), env.autoesc);
output += "\n\t\t\t\t\t<span class=\"lbl\">\n\t\t\t\t\t";
frame = frame.push();
var t_7 = runtime.memberLookup((t_4),"issues", env.autoesc);
if(t_7) {for(var t_5=0; t_5 < t_7.length; t_5++) {
var t_8 = t_7[t_5];
frame.set("issue", t_8);
output += "\n\t\t\t\t\t\t<a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_8),"html_url", env.autoesc), env.autoesc);
output += "\" id=\"#";
output += runtime.suppressValue(runtime.memberLookup((t_8),"number", env.autoesc), env.autoesc);
output += "\">\n\t\t\t\t\t\t\t<div class=\"blankslate\">\n\t\t\t\t\t\t\t\t<h4 class=\"list-group-item-name\">";
output += runtime.suppressValue(runtime.memberLookup((t_8),"title", env.autoesc), env.autoesc);
output += "</h4>\n\t\t\t\t\t\t\t\t<p>";
output += runtime.suppressValue(runtime.memberLookup((t_8),"body", env.autoesc), env.autoesc);
output += "</p>\n\t\t\t\t\t\t\t\t";
if(runtime.memberLookup((t_8),"assignee", env.autoesc)) {
output += "\n\t\t\t\t\t\t\t\t<span href=\"/";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"assignee", env.autoesc)),"login", env.autoesc), env.autoesc);
output += "\" class=\"avatar\ttooltipped downwards\" original-title=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"assignee", env.autoesc)),"login", env.autoesc), env.autoesc);
output += "\"><img width=\"24\"\theight=\"24\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_8),"assignee", env.autoesc)),"avatar_url", env.autoesc), env.autoesc);
output += "\"></span>\n\t\t\t\t\t\t\t\t";
;
}
output += "\n\t\t\t\t\t\t\t\t<span class=\"labels\">\n\t\t\t\t\t\t\t\t\t";
frame = frame.push();
var t_11 = runtime.memberLookup((t_8),"labels", env.autoesc);
if(t_11) {for(var t_9=0; t_9 < t_11.length; t_9++) {
var t_12 = t_11[t_9];
frame.set("label", t_12);
output += "\n\t\t\t\t\t\t\t\t\t<span class=\"label labelstyle-";
output += runtime.suppressValue(runtime.memberLookup((t_12),"color", env.autoesc), env.autoesc);
output += "\"\n\t\t\t\t\t\t\t\t\t\t\t\tdata-name=\"";
output += runtime.suppressValue(runtime.memberLookup((t_12),"name", env.autoesc), env.autoesc);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_12),"name", env.autoesc), env.autoesc);
output += "</span>\n\t\t\t\t\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n\t\t\t\t\t</span>\n        </div>\n\t\t\t\t";
;
}
}
frame = frame.pop();
output += "\n      </div>\n    </div>\n  </div>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();

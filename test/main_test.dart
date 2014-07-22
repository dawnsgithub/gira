library main_test;

import 'package:unittest/unittest.dart';
import 'package:di/di.dart';
import 'package:angular/angular.dart';
import 'package:angular/mock/module.dart';
import 'package:gira/services/repo_service.dart';
import '../web/main.dart';

main() {
  setUp((){
    setUpInjector();
    module((Module m) => m.install(new UserModel()));
  });
  tearDown(tearDownInjector);
  
  group('user-data', () {
    test('should show user name and avatar', inject((UserDataController userctrl) {
        expect(userctrl.user.login, equals("jcouyang"));
        expect(userctrl.user.avatar_url, equals("asdfsfa"));
      }));
  });

  group('repo-service', () {
    test('should show user name and avatar', async(inject((RepoService repoService, MockHttpBackend backend) {
      backend.expectGET('https://api.github.com/user?access_token=null').respond('{"name":"jcouyang"}');
      backend.expectGET('https://api.github.com/user/orgs?access_token=null').respond('["orgs"]');
      backend.expectGET('https://api.github.com/user/repos?access_token=null').respond('["repos"]');
      microLeap();
      backend.flush();
      microLeap();
      repoService.loaded.then((_){
        expect(repoService.orgs, equals(["orgs"]));
        expect(repoService.user, equals({"name":"jcouyang"}));
        expect(repoService.repos, equals(["repos"]));
      });
    })));
  });
}
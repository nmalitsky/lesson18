'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$timeout', function($timeout) {
    var vm = this;

    vm.processLogin = false;
    vm.login = "";
    vm.password = "";

    vm.doLogin = function () {
      vm.processLogin = true;
      $timeout(function() { vm.processLogin = false; }, 3000);
    }

}]);
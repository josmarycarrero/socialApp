'use strict';
angular.module('main')
.controller('AuthCtrl', function ($log, $state, $scope) {

  $log.log('Hello from your Controller: AuthCtrl in module main:. This is your controller:', this);

  $scope.viewLogin = function () {
    $state.go('authLogin');
  };

  $scope.viewReg = function () {
    $state.go('authReg');
  };

  $scope.viewHome = function () {
    $state.go('main.home');
  };

});

'use strict';
angular.module('main')
.controller('ProfileCtrl', function ($log, $scope, User) {

  $log.log('Hello from your Controller: ProfileCtrl in module main:. This is your controller:', this);
  $scope.user = User.currentUser();

});

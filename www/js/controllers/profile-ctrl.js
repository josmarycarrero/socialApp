'use strict';
angular.module('main')
.controller('ProfileCtrl', function ($log, $scope, $rootScope) {

  $log.log('Hello from your Controller: ProfileCtrl in module main:. This is your controller:', this);

$rootScope.description = "Hola soy josma";

});

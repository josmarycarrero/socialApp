'use strict';
angular.module('main')
.controller('MessageCtrl', function ($log, $scope, Message) {

  $log.log('Hello from your Controller: MessageCtrl in module main:. This is your controller:', this);

  $scope.messages = Message.getAllChat();

  $scope.delete = function (index) {
    $log.log('delete', index);
    $scope.messages.splice(index, 1);
  };

  $scope.edit = function (item) {
    $log.log('edit', item);
  };


});

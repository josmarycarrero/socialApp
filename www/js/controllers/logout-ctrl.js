'use strict';
angular.module('main')
.controller('logoutCtrl', function ($log) {

  $log.log('Hello from your Controller: logoutCtrl in module main:. This is your controller:', this);


    firebase.auth().signOut().then(function() {
      console.log("logout success");
      $state.go('authReg');
    }, function(error) {
      console.log("logout error: " + error);
    });


});

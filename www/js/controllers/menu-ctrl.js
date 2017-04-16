'use strict';
angular.module('main')
.controller('MenuCtrl', function ($log, $rootScope, $scope) {

  $log.log('Hello from your Controller: MenuCtrl in module main:. This is your controller:', this);


 	var user = 	$rootScope.user.photoURL;

	/*  var user = {
      name:     $rootScope.user.name,
      email:    $rootScope.user.email,
      photoURL: $rootScope.user.photoURL,
      description: 'Hi, I am a Software Engineer. I love to develop mobile ' +
        'applications. UI/UX makes my life beautiful'
    };*/

});

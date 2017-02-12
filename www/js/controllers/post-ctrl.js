'use strict';
angular.module('main')
.controller('PostCtrl', function ($log, $scope, Post, $ionicLoading, $timeout, $stateParams) {

  $log.log('Hello from your Controller: HomeCtrl in module main:. This is your controller:', this);

  var postId = $stateParams.id;
  $scope.isLoaded = false;
  $scope.comments = Post.getAllComments();
  $scope.post = Post.getById(postId);

  $ionicLoading.show({
    templateUrl: 'templates/loading.html',
    animation: 'fade-in',
    showBackdrop: false,
    maxWidth: 400,
    scope: $scope,
    showDelay: 2
  });

  $timeout(function () {
    $scope.isLoaded = true;
    $ionicLoading.hide();
  }, 1200);
});

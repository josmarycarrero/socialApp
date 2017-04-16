'use strict';
angular.module('main')
.controller('HomeCtrl', function ($log, $scope, $cordovaGeolocation, $ionicLoading, $state, $timeout, $ionicModal) {

  $log.log('Hello from your Controller: HomeCtrl in module main:. This is your controller:', this);

  
  var options = {timeout: 10000, enableHighAccuracy: true};
  var latLng;

  $.ajax({
      url: "http://freegeoip.net/json/",
      async: false,
      dataType: 'json',
      success: function(data) {
          latLng= new google.maps.LatLng(data.latitude, data.longitude);
            console.log(data.latitude);
            console.log(data.longitude);
        }
    });



var watchId = {},
watchOptions = {
frequency: 15 * 60 * 1000,
timeout : 1 * 60 * 1000,
enableHighAccuracy: false
};

var watchId = $cordovaGeolocation.watchPosition(watchOptions);

watchId.then(
null,
function(err) {
console.log('Error: ' + err);
},
function(position) {
var latitude = position.coords.latitude,
longitude = position.coords.longitude;

  console.log(watchId);
});



 /* $cordovaGeolocation
    .getCurrentPosition(options)
    .then(function (position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude

    alert("lat: " + lat + " long: " + long);

    }, function(err) {
      // error
    }); */


  var map = new google.maps.Map(document.getElementById('map'), {
      center: latLng,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  });


  var userPin = new google.maps.Marker({  
      position: latLng,
      title:"Hello World!",
      visible: true,
      icon: 'img/images/avatar3.png'
  }); 

  userPin.setMap(map);


  $scope.map = map;


   $ionicModal.fromTemplateUrl('../templates/my-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
   }).then(function(modal) {
      $scope.modal = modal;
   });

  google.maps.event.addDomListener(userPin, 'click', function() {
      $scope.openModal();
  });


   $scope.openModal = function() {
      $scope.modal.show();
   }; 
  
   $scope.closeModal = function() {
      $scope.modal.hide();
   };

   $scope.viewMessages = function () {
     $state.go('main.message');
     $scope.closeModal();
   };
  
   //Cleanup the modal when we're done with it!
   $scope.$on('$destroy', function() {
      $scope.modal.remove();
   });
  
   // Execute action on hide modal
   $scope.$on('modal.hidden', function() {
      // Execute action
   });
  
   // Execute action on remove modal
   $scope.$on('modal.removed', function() {
      // Execute action
   });


 

});

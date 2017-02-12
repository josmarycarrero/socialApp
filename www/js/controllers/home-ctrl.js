'use strict';
angular.module('main')
.controller('HomeCtrl', function ($log, $scope, $cordovaGeolocation, $ionicLoading, $state, $timeout) {

  $log.log('Hello from your Controller: HomeCtrl in module main:. This is your controller:', this);
  
  var options = {timeout: 10000, enableHighAccuracy: true};
  var latLng;

    $.ajax({
        url: "http://freegeoip.net/json/",
        async: false,
        dataType: 'json',
        success: function(data) {
            latLng= new google.maps.LatLng(data.latitude, data.longitude);
        }
    });

    var map = new google.maps.Map(document.getElementById('map'), {
      center: latLng,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
     });



  var marker = new google.maps.Marker({  
      position: latLng ,
      title:"Hello World!",
      visible: true
    }); 

  marker.setMap(map);


  $scope.map = map;
 

});

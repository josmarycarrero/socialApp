'use strict';
angular.module('main')
.controller('AuthCtrl', function ($log, $state, $scope, $rootScope) {

  $log.log('Hello from your Controller: AuthCtrl in module main:. This is your controller:', this);


  $scope.viewLogin = function (response) {
    
    var provider = new firebase.auth.FacebookAuthProvider();
    
    provider.addScope('user_birthday');
    provider.addScope('email');
    provider.addScope('user_about_me');
    provider.addScope('public_profile');  

    provider.setCustomParameters({
      'display': 'popup'
    });

    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      getFacebookUserInformation(token, result.user.photoURL);
      sendUserInfo();
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  };


  $scope.viewReg = function () {
    $state.go('authReg');
  };


  $scope.viewHome = function () {
    $state.go('main.home');
  };


  $scope.viewLogout = function () {
    console.log("logout");
    firebase.auth().signOut().then(function() {
      console.log("logout success");
      $state.go('authReg');
    }, function(error) {
      console.log("logout error: " + error);
    });

  };

  
  function getFacebookUserInformation(token, photoURL) {
    $.get( "https://graph.facebook.com/me?access_token=" + token +"&fields=id,picture,name,first_name,last_name,email, about, birthday, age_range, gender, hometown, timezone", function( result ) {      
      $rootScope.user = result;  
      $rootScope.user.photoURL = photoURL;
      $state.go('main.home');  
    });
  }


  function calculateAge(birthday) { // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }


  function sendUserInfo() {

    var user = $rootScope.user;
    var name = user.name;
    var first_name = user.first_name;
    var last_name = user.last_name;
    var email = user.email;
    var gender = user.gender;
    //var dob = new Date(user.birthday);
    var age = calculateAge(new Date(user.birthday));
    var about = user.about;
    var facebookID = user.id;
    var hometown = user.hometown;
    var timezone = user.timezone;
    var apiUrl = "https://rmdidb.appspot.com/_ah/api/ratemyday/v1/user";
    var userInfo = {  
                        "name": name,
                        "first_name" : first_name,
                        "last_name" : last_name,
                        "email": email,
                        "gender": gender,
                        //bod": dob,
                        "age" : age,
                        "about" : about,          
                        "facebookID": facebookID,
                        "hometown" : hometown,
                        "timezone" : timezone
                    };

    var json_string = JSON.stringify(userInfo);             

    $.ajax({ 
            url: apiUrl, 
            dataType: 'json', 
            contentType: 'application/json; charset=utf-8', 
            type: "POST",
            data: json_string,
            success: function(data) { 
                console.log("Success");
            }
    });

  }


});

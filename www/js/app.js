angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  'ngAnimate',
])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider) {

  $sceDelegateProvider.resourceUrlWhitelist(['self', new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$')]);

  $urlRouterProvider.otherwise('/authLogin');

  $stateProvider


  .state('authLogin', {
    url: '/authLogin',
    templateUrl: 'templates/auth-login.html',
    controller: 'AuthCtrl',
  })

  .state('main', {
    url: '/main',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'MenuCtrl as menu'
  })

  .state('main.home', {
    url: '/home',
    views: {
    'pageContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
          }
    }
  })

  .state('main.profile', {
    url: '/profile',
    views: {
      'pageContent': {
        templateUrl: 'templates/profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })

  .state('main.messages', {
    url: '/messages',
    views: {
       'pageContent': {
        templateUrl: 'templates/messages.html',
        controller: 'FacebookCtrl'
      }
    }
  })   

  .state('main.message', {
    url: '/message',
    views: {
      'pageContent': {
        templateUrl: 'templates/message.html',
        controller: 'MessageCtrl'
      }
     }
   })

  .state('main.about', {
    url: '/about',
    views: {
      'pageContent': {
        templateUrl: 'templates/about.html',
        controller: 'AboutCtrl'
      }
    }
  })  

  .state('main.logout', {
    url: '/authLogin',
    views: {
      'pageContent': {
        templateUrl: 'templates/auth-login.html',
        controller: 'AuthCtrl',
      }
    }
  })           

    /*
    .state('walk', {
      url: '/walk',
      templateUrl: 'templates/walk.html',
      controller: 'WalkCtrl',
    })*/


   /* .state('authReg', {
      url: '/authReg',
      templateUrl: 'templates/auth-reg.html',
      controller: 'AuthCtrl',
    }) 
      .state('main.list', {
        url: '/list',
        views: {
          'pageContent': {
            templateUrl: 'templates/list.html',
            // controller: '<someCtrl> as ctrl'
          }
        }
      })

      })
      .state('main.settings', {
        url: '/settings',
        views: {
          'pageContent': {
            templateUrl: 'templates/settings.html',
            controller: 'SettingsCtrl'
          }
        }
      })
*/

});

'use strict';
angular.module('main')
.service('Message', function ($log) {

  $log.log('Hello from your Service: Message in module main');

  this.getAllChat = function () {
    var senderAvatar = 'img/images/avatar1.png';
    var reciverAvatar = 'img/images/avatar3.png';
    return [
      {
        message: 'Hello Enrique, how are you, it\'s been a long time since we last met?',
        username: 'Josmary',
        sender: true,
        avatar: senderAvatar,
      },
      {
        message: 'Oh, hi Josmary I\'m have got a new job now and is going great. How about you?',
        username: 'Enrique',
        sender: false,
        avatar: reciverAvatar,
      },
      {
        message: 'Not too bad.',
        username: 'Josmary',
        sender: true,
        avatar: senderAvatar,
      },
    ];
  };

  this.getAll = function () {
    return [
      {
        message: 'Hi, Where are you?',
        avatar: 'img/images/avatar2.png',
        seen: true,
        datetime: '',
        username: 'Yngrid',
      },
      {
        message: 'How much is It?',
        avatar: 'img/images/avatar3.png',
        seen: false,
        datetime: '',
        username: 'Enrique',
      },
      {
        message: 'Yeah yeah, Sure I am awsome.',
        avatar: 'img/images/avatar1.png',
        seen: true,
        datetime: '',
        username: 'Josmary',
      }
    ];
  };

});

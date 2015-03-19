  (function (){
  "use strict";

  angular.module('angularMapsTutorialApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'google-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: '/main.html',
      controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
    })
  });
});

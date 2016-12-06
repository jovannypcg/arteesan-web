'use strict';

/**
 * @ngdoc overview
 * @name arteesanApp
 * @description
 * # arteesanApp
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'app.users',
    'app.headr',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'components/users/view.html',
        controller: 'usersCtrl',
        controllerAs: 'usersCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/signup', {
        templateUrl: 'components/signup/view.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

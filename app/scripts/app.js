'use strict';

/**
 * @ngdoc overview
 * @name kanbanAngularApp
 * @description
 * # kanbanAngularApp
 *
 * Main module of the application.
 */
angular
  .module('kanbanAngularApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

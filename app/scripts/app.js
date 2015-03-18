'use strict';

angular.module('kanbanApp', [
  'ui.router'
]);

var appConfig = function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/dashboard');

  $stateProvider
    .state('app', {
      abstract : true,
      views : {
        'header' : {
          templateUrl : 'scripts/header/header.html',
          controller : 'HeaderController as headerController'
        },
        'content' : {
          template : '<ui-view></ui-view>'
        },
        'footer' : {
          templateUrl : 'scripts/footer/footer.html'
        }
      }
    })
    .state('app.dashboard', {
      url : '/dashboard',
      views : {
        '' : {
          templateUrl: 'scripts/dashboard/dashboard.html',
          controller: 'DashboardController as controller'
        }
      }
    })
    .state('app.backlog', {
      url: '/backlog',
      views : {
        '': {
          templateUrl: 'scripts/backlog/backlog.html',
          controller: 'BacklogController as controller'
        }
      }
    });

};

appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

angular.module('kanbanApp')
  .config(appConfig);

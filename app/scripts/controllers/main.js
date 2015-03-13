'use strict';

/**
 * @ngdoc function
 * @name kanbanAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kanbanAngularApp
 */
angular.module('kanbanAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

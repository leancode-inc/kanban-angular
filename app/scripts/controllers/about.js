'use strict';

/**
 * @ngdoc function
 * @name kanbanAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the kanbanAngularApp
 */
angular.module('kanbanAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

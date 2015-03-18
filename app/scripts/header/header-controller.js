'use strict';

var HeaderController = function ($scope, $state) {
  $scope.$state = $state;
};

HeaderController.$inject = ['$scope', '$state'];

angular.module('kanbanApp')
  .controller('HeaderController', HeaderController);


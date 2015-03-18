'use strict';

/**
 * @ngdoc function
 * @name directivesTryoutApp.controller:CustomCtrl
 * @description
 * # CustomCtrl
 * Controller of the directivesTryoutApp
 */
angular.module('directivesTryoutApp')
  .controller('CustomCtrl', function ($scope) {
    $scope.doSomething = function () {
    	console.log('do doSomething');
    };
  });

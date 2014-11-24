'use strict';

/**
 * @ngdoc directive
 * @name directivesTryoutApp.directive:communicatingDirectives
 * @description
 * # communicatingDirectives
 */
angular.module('directivesTryoutApp')
  .directive('communicatingExposer', function () {
    return {
      template: '<div>In exposer <communicating-consumer></communicating-consumer></div>',
      restrict: 'E',
      scope: {},
      controller: function ($scope) {
      		$scope.myData = 123;
      		console.log('In exposer');
      		this.calculate = function () { // NOTA! Esposto solo il calculate, non myData
      			return $scope.myData + 27;
      		};
      }
    };
  })
  .directive('communicatingConsumer', function () {
    return {
      template: 'aaaaa<div>{{computed}}</div>',
      restrict: 'E',
      require: '^communicatingExposer',
      scope: {
      },
      link: function (scope, element, attrs, controller) {
      	 scope.computed = controller.calculate() + 1 ;
      }
    };
  });
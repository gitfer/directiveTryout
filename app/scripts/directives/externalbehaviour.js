'use strict';

/**
 * @ngdoc directive
 * @name directivesTryoutApp.directive:externalBehaviour
 * @description
 * # externalBehaviour
 */
angular.module('directivesTryoutApp')
  .directive('externalBehaviour', function () {
    return {
      template: '<div><button ng-click="closeSomething()">Directive button</button></div><div ng-transclude></div>',
      restrict: 'E',
      transclude: true,
      scope: {
      	closeSomething: '&close' // when you want your directive to expose an API for binding to behaviors.
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });

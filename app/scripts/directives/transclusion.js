'use strict';

/**
 * @ngdoc directive
 * @name directivesTryoutApp.directive:transclusion
 * @description
 * # transclusion
 */
angular.module('directivesTryoutApp')
  .directive('transclusion', function () {
    return {
      template: 'AAA <span ng-transclude>{{nome}}</span>',
      restrict: 'E',
      transclude: true, // transclude true to use when you want to create a directive that wraps arbitrary content.
      scope: {},
      link: function postLink(scope, element, attrs) {
        scope.nome = 'NOME MODIFICATO INTERNAMENTE E MAI CAMBIATO'; // Try commenting transclusion on line 12 and 14 to see how binding changes
      }
    };
  });

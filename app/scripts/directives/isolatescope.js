'use strict';

/**
 * @ngdoc directive
 * @name directivesTryoutApp.directive:isolateScope
 * @description
 * # isolateScope
 */
angular.module('directivesTryoutApp')
  .directive('isolateScope', function () {
    return {
      restrict: 'E',
      scope: {
      	cliente: '=customer'
      },
      template: '<div>{{cliente.nome}}</div><div>{{cliente.cognome}}</div>',
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });

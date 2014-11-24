'use strict';

/**
 * @ngdoc directive
 * @name directivesTryoutApp.directive:contatto
 * @description
 * # contatto
 */
angular.module('directivesTryoutApp')
  .directive('contatto', function () {
    return {
      template: '<div>Nome: {{contatto.nome}}</div><div>Cognome: {{contatto.cognome}}</div>',
      restrict: 'E',
      // link: function postLink(scope, element, attrs) {
      //   element.text('this is the contatto directive');
      // }
    };
  });

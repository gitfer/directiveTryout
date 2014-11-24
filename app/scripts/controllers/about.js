'use strict';

/**
 * @ngdoc function
 * @name directivesTryoutApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the directivesTryoutApp
 */
angular.module('directivesTryoutApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.contatto = {
    	nome: 'Giuseppe',
    	cognome: 'Verdi'
    };
  });

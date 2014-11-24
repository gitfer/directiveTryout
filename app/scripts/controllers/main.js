'use strict';

/**
 * @ngdoc function
 * @name directivesTryoutApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the directivesTryoutApp
 */
angular.module('directivesTryoutApp')
  .controller('MainCtrl', function ($scope, $timeout) {
    $scope.contatto = {
    	nome: 'Mario',
    	cognome: 'Rossi'
    };

    $timeout(function () {
        $scope.contatto = {
	    	nome: 'Piero',
	    	cognome: 'Marroni'
    	};
    },5000);

    $scope.chiudi = function () {
    	alert('Closing...');

    };
  });

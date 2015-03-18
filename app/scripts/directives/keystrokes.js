'use strict';

/**
 * @ngdoc directive
 * @name directivesTryoutApp.directive:keyStrokes
 * @description
 * # keyStrokes
 */
angular.module('directivesTryoutApp')
  .directive('keyStrokes', function ($parse) {
    return {
      template: '<input ng-keyup="event=$event" type="text" value="aaa"/>',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.val('this is the keyStrokes directive');
        
        element.bind('click', function () {
        	var evt = $parse('event');
        	console.log('kaanduna', evt(event))
        });
      }
    };
  });

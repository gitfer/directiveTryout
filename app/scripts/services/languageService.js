'use strict';

define([], function () {

    var languageServiceProvider = function () {

        var x;

        var sayHello =  function () {
            console.log('hello', x !== undefined);
              x.get('users',{user: 'fede'}).success(function () {
                // body...
            }).error(function () {
                // body...
            });
        };

        var ciao =  function () {
            console.log('ciao in', x !== undefined);
        };

        this.sayHello =  function () {
            console.log('this.hello', x !== undefined);
            x.get('users',{user: 'fede'}).success(function () {
                // body...
            }).error(function () {
                // body...
            });
        };

        this.ciao =  function () {
            console.log('this.ciao in', x !== undefined);
        };
;
        this.$get = ['$q', '$http', function ($q, $http) {
            x = $http;
            return this;
            //  return { 
            //     sayHello: sayHello,
            //     ciao: ciao
            // };
        }];
    };

    var servicesApp = angular.module('languageService', []);

    //Must be a provider since it will be injected into module.config()    
    servicesApp.provider('languageService', languageServiceProvider);
});
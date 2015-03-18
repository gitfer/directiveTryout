'use strict';

define(['services/languageService'], function () {

    var app = angular.module('directivesTryoutApp', ['ngRoute', 'languageService']);

    app.config(['$routeProvider', 'languageServiceProvider', '$controllerProvider',
                '$compileProvider', '$filterProvider', '$provide', '$httpProvider',

        function ($routeProvider, languageServiceProvider, $controllerProvider,
                  $compileProvider, $filterProvider, $provide, $httpProvider) {

            //Change default views and controllers directory using the following:
            //routeResolverProvider.routeConfig.setBaseDirectories('/app/views', '/app/controllers');

            // languageServiceProvider.sayHello();
            // console.log('languageServiceProvider', languageServiceProvider);
            // languageServiceProvider.$get().ciao();

            app.register =
            {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };

            //Define routes - controllers will be loaded dynamically
            // var route = routeResolverProvider.route;

            // $routeProvider
            //     //route.resolve() now accepts the convention to use (name of controller & view) as well as the 
            //     //path where the controller or view lives in the controllers or views folder if it's in a sub folder. 
            //     //For example, the controllers for customers live in controllers/customers and the views are in views/customers.
            //     //The controllers for orders live in controllers/orders and the views are in views/orders
            //     //The second parameter allows for putting related controllers/views into subfolders to better organize large projects
            //     //Thanks to Ton Yeung for the idea and contribution
            //     .when('/customers', route.resolve('Customers', 'customers/', 'vm'))
            //     .when('/customerorders/:customerId', route.resolve('CustomerOrders', 'customers/', 'vm'))
            //     .when('/customeredit/:customerId', route.resolve('CustomerEdit', 'customers/', 'vm', true))
            //     .when('/orders', route.resolve('Orders', 'orders/', 'vm'))
            //     .when('/about', route.resolve('About', '', 'vm'))
            //     .when('/login/:redirect*?', route.resolve('Login', '', 'vm'))
            //     .otherwise({ redirectTo: '/customers' });

    }]);

    app.run(['$rootScope', '$location', 'languageService',
        function ($rootScope, $location, languageService) {
          languageService.sayHello();
          languageService.ciao();
    }]);

    return app;

});






/**
 * @ngdoc overview
 * @name directivesTryoutApp
 * @description
 * # directivesTryoutApp
 *
 * Main module of the application.
 */
// angular
//   .module('directivesTryoutApp', [
//     'ngAnimate',
//     'ngCookies',
//     'ngResource',
//     'ngRoute',
//     'ngSanitize',
//     'ngTouch'
//   ])
//   .config(function ($routeProvider) {
//     $routeProvider
//       .when('/', {
//         templateUrl: 'views/main.html',
//         controller: 'MainCtrl'
//       })
//       .when('/about', {
//         templateUrl: 'views/about.html',
//         controller: 'AboutCtrl'
//       })
//       .when('/custom', {
//         templateUrl: 'views/custom.html',
//         controller: 'CustomCtrl'
//       })
//       .otherwise({
//         redirectTo: '/'
//       });
//   });

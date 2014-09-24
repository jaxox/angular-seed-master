'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('loginApp', ['ngRoute']);

app.
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {templateUrl: 'partials/login.html'});
  $routeProvider.otherwise({redirectTo: '/login'});
}]);

'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('ngShow', ['ngRoute','ngResource']);

app.
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {templateUrl: 'partials/login.html' });
  $routeProvider.otherwise({redirectTo: '/login'});

}]);

app.
config(['$httpProvider', function($httpProvider) {
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.defaults.headers.common['Access-Control-Max-Age'] = '1728000';
        $httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript';
        $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
        $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
        $httpProvider.defaults.useXDomain = true;
}]);

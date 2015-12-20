var app = angular.module('iotDevices', ['ngMaterial', 'ngRoute']);

// ngRoute
app.config(function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'views/home.html',
        controller: 'homeControl'
    });
    $routeProvider.otherwise({redirectTo: "/home"});
});
app.config(function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'view/home.html',
        controller: 'homeControl'
    });
    $routeProvider.otherwise({redirectTo: "/home"});
});
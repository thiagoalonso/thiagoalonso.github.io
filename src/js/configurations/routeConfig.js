app.config(function ($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'view/login.html',
        controller: 'loginControl'
    });
    $routeProvider.when('/home', {
        templateUrl: 'view/home.html',
        controller: 'homeControl'
    });
    $routeProvider.when('/detail/:id', {
        templateUrl: 'view/detail.html',
        controller: 'detailControl'
    });
    $routeProvider.otherwise({redirectTo: "/home"});
});
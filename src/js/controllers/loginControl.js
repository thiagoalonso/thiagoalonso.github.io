app.controller('loginControl', function ($scope, $http, $cookies, $location) {

        // big text on login screen
        $scope.mainTitle = 'Get to know our other products!';

        // send user data to backend
        $scope.loginUser = function (user) {

            // send {user} to APILambda and receive login token if success
            $http.post('https://z6abbp7ute.execute-api.us-east-1.amazonaws.com/dev/login', user).success(function (data) {
                // set ALT (arkmeds login token)
                $cookies.put('alt', data);
                // redirect to homepage
                $location.path('#/home');
            });
        }

    });
app.controller('homeControl', function ($scope, $http, $cookies) {

    $scope.devices = [];

    $scope.loginToken = $cookies.get('alt');

    var loadDevices = function () {
        $http.get('https://z6abbp7ute.execute-api.us-east-1.amazonaws.com/dev/devices/60').success(function (data) {
            // populates devices array with data from APILambda
            $scope.devices = data.map(function (obj) {
                // calculates sum from the values array
                var sum = obj.values.reduce(function (a, b) {
                    return a + b.value;
                }, 0);
                // calculates average and set floating point
                obj.average = (sum / obj.values.length).toFixed(2);
                return obj;
            });
        });
    }

    loadDevices();

});
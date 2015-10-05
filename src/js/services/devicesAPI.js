app.factory("devicesAPI", function ($http) {

    var _getDevice = function (id) {
        return {id:id, name: 'Device HU3BR666', temperatures: [1,2,3,4,5,6,7,8,9,10]};
    };

    return {
        getDevice: _getDevice
    };

});
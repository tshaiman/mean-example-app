(function(){
    app.factory('authenticationService', ['$http', function($http) {

        var urlBase = '/users';
        var dataFactory = {};
        var token = null;


        dataFactory.login = function (user,successCallback, errorCallback) {
            token = null;
            return $http.post(urlBase + '/login', user)
                        .then(function(response){
                            var headers =  response.headers();
                            token = headers["x-auth"];
                            successCallback(response);
                        }, errorCallback);
        };

        dataFactory.getToken = function(){
            return token;
        } 


        return dataFactory;
    }]);
})();
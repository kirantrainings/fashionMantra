angular.module("register")
    .service("registerSvc", ["$http", "$q", function ($http, $q) {

        this.register = function (data) {
            var dfd = $q.defer();
            $http.post("/api/register", {
                    register: data
                })
                .then(function (response) {
                    dfd.resolve(response);
                }).catch(function (response, data) {
                    dfd.reject(response);
                });
            return dfd.promise;
        }
}])

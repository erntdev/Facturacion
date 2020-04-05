(function () {
    "use strict";
    angular.module("ConfiguracionModule")
        .factory('ConfiguracionService', ConfiguracionService)

    ConfiguracionService.$inject = ['$http', '$q'];

    function ConfiguracionService($http, $q) {

        var self = {
            cargar: cargar
        }

        return self;

        function cargar() {
            var defered = $q.defer();
            $http.get('app/modules/configuration/configuration.json')
                .then(function (response) {
                    defered.resolve(response.data);
                }, function (handleError) {
                    defered.reject();
                    console.error("Could not get configuration file: ", handleError);
                });
            return defered.promise;
        }
    }
})();
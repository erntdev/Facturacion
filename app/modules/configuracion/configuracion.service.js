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
            $http.get('app/modules/configuracion/configuracion.json')
                .then(function (response) {
                    defered.resolve(response.data);
                }, function (handleError) {
                    defered.reject();
                    console.error("No se pudo el archivo de configuracion: ", handleError);
                });
            return defered.promise;
        }
    }
})();
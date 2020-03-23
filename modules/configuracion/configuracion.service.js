"use strict";

angular.module("ConfiguracionModule")
    .factory('ConfiguracionService', ['$http', '$q', function ($http, $q) {
        var self = {
            cargar: function () {
                var defered = $q.defer();
                $http.get('modules/configuracion/configuracion.json')
                    .then(function (response) {
                        defered.resolve(response.data);
                    }, function (handleError) {
                        defered.reject();
                        console.error("No se pudo el archivo de configuracion: ", handleError);
                    });
                return defered.promise;
            }
        }

        return self;
    }])
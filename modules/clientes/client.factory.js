(function () {
    'use strict'
    angular.module('ClienteModule')
        .factory('ClienteFactory', ClienteFactory)

    ClienteFactory.$inject = ['$http', '$q']

    function ClienteFactory($http, $q) {
        var self = {
            cargando: false,
            err: false,
            conteo: 0,
            result: [],
            pagActual: 1,
            pagSiguiente: 1,
            pagAnterior: 1,
            totalPaginas: 1,
            paginas: [],
            getClient: getClient
        }

        return self;

        function getClient() {
            var here = this;
            var deferred = $q.defer();

            $http.get('php/clientes/get.clientes.php')
                .then(function (response) {
                    here.err = response.data.err;
                    here.conteo = response.data.conteo;
                    here.result = response.data.clientes;
                    here.pagActual = response.data.pag_actual;
                    here.pagSiguiente = response.data.pag_siguiente;
                    here.pagAnterior = response.data.pag_anterior;
                    here.totalPaginas = response.data.total_paginas;
                    here.paginas = response.data.paginas;

                    return deferred.resolve();
                }, function (handleError) {
                    console.log(handleError);
                });

            return deferred.promise;
        }
    }
})()
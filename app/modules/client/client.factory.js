(function () {
    'use strict'
    angular.module('ClienteModule')
        .factory('ClienteFactory', ClienteFactory)

    ClienteFactory.$inject = ['$http', '$q', 'SharedMenuFactory']

    function ClienteFactory($http, $q, sharedMenuFactory) {
        var services = {
            cargando: false,
            err: false,
            conteo: 0,
            result: [],
            pagActual: 1,
            pagSiguiente: 1,
            pagAnterior: 1,
            totalPaginas: 1,
            paginas: [],
            getClient: loadPage,
            setActive: setActive,
            save: save
        }

        return services;

        function loadPage(page) {
            var here = this;
            var deferred = $q.defer();

            $http.get('php/clientes/get.clientes.php?pag=' + page)
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

        function setActive() {
            sharedMenuFactory.activar('mCliente');
        }

        function save(client) {
            var deferred = $q.defer();
            $http.post('php/clientes/post.client.save.php', client)
            .then(function(response) {
                deferred.resolve(response);
                services.getClient(services.pagActual);
            }, function(handleError) {
                console.log(handleError);
                deferred.reject(handleError);
            })
            return deferred.promise;
        }
    }
})()
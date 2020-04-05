(function () {
    "use strict";
    angular.module("DashboardModule")
        .factory('MensajeService', MensajeService);

    MensajeService.$inject = ['$http', '$q'];

    function MensajeService($http, $q) {

        var self = {
            mensajes: [
                {
                    img: 'dist/img/user1-128x128.jpg',
                    nombre: "Ernesto García",
                    mensaje: "Bienvenido a nuestro servicio de facturación",
                    fecha: '05-marzo'
                },
                {
                    img: 'dist/img/user8-128x128.jpg',
                    nombre: "Cuauhtémoc García",
                    mensaje: "Thi is an example of a message",
                    fecha: '15-marzo'
                },
                {
                    img: 'dist/img/user3-128x128.jpg',
                    nombre: "Silvia Jiménez",
                    mensaje: "This is a another example",
                    fecha: '18-marzo'
                }
            ],
            cargar: cargar
        }

        return self;

        function cargar() {
            var defered = $q.defer();
            $http.get('')
                .then(function (response) {
                    defered.resolve(response.data);
                }, function (handleError) {
                    defered.reject(handleError);
                });
            return defered.promise;
        }
    }
})();
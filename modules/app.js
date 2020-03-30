(function () {
    "use strict";

    angular.module("FacturacionModule")
        .controller("MainController", MainController);

    MainController.$inject = ["ConfiguracionService", "MensajeService", "NotificacionesService"];

    function MainController(configuracionService, mensajeService, notificacionesService) {
        var vm = this;

        vm.mensajes = mensajeService.mensajes;
        vm.notificaciones = notificacionesService.notificaciones;
        vm.config = {};
        vm.usuario = {
            nombre: "Ernesto García"
        }

        cargarData();

        function cargarData() {
            configuracionService.cargar()
                .then(function (data) {
                    vm.config = data;
                });
        }
    }
})();
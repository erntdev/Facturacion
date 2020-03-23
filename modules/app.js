"use strict";

(function () {
    angular.module("FacturacionModule")
        .controller("MainController", ["ConfiguracionService", "MensajeService", "NotificacionesService", MainController]);

    function MainController(configuracionService, mensajeService, notificacionesService) {
        var vm = this;
        vm.config = {};
        vm.mensajes = mensajeService.mensajes;
        vm.notificaciones = notificacionesService.notificaciones;

        configuracionService.cargar()
            .then(function (data) {
                vm.config = data;
            });

        vm.usuario = {
            nombre: "Ernesto García"
        }

        vm.activar = function (menu, submenu) {
            vm.mDashboard = "";
            vm.mClientes = "";
            vm[menu] = 'active';
        }

        vm.activar('mDashboard');
    }
})();
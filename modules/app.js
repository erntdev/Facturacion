"use strict";

(function () {
    angular.module("FacturacionModule")
        .controller("MainController", ["$scope", "ConfiguracionService", "MensajeService", "NotificacionesService", MainController]);

    function MainController($scope, configuracionService, mensajeService, notificacionesService) {
        var vm = this;
        vm.config = {};
        vm.mensajes = mensajeService.mensajes;
        vm.notificaciones = mensajeService.notificaciones;

        configuracionService.cargar()
            .then(function (data) {
                vm.config = data;
            });

        vm.usuario = {
            nombre: "Ernesto García"
        }

        $scope.activar = function (menu, submenu) {
            vm.mDashboard = "";
            vm.mClientes = "";
            vm[menu] = 'active';
        }
    }
})();
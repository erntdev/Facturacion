"use strict";

(function () {
    angular.module("FacturacionModule")
        .controller("MainController", ["$scope", "ConfiguracionService", "MensajeService", "NotificacionesService", MainController]);

    function MainController($scope, configuracionService, mensajeService, notificacionesService) {
        $scope.config = {};
        $scope.mensajes = mensajeService.mensajes;
        $scope.notificaciones = notificacionesService.notificaciones;

        configuracionService.cargar()
            .then(function (data) {
                $scope.config = data;
            });

        $scope.usuario = {
            nombre: "Ernesto García"
        }

        $scope.activar = function (menu, submenu) {
            $scope.mDashboard = "";
            $scope.mClientes = "";
            $scope[menu] = 'active';
        }
    }
})();
(function () {
    "use strict";

    angular.module("FacturacionModule")
        .controller("MainController", MainController);

    MainController.$inject = ["ConfiguracionService", "MensajeService", "NotificacionesService"];

    function MainController(configuracionService, mensajeService, notificacionesService) {
        var vm = this;

        vm.mensajes = mensajeService.mensajes;
        vm.notificaciones = notificacionesService.notificaciones;
        vm.activar = activar;
        vm.config = {};
        vm.usuario = {
            nombre: "Ernesto García"
        }

        activar('mDashboard');
        cargarData();

        // Function declaration
        function activar(menu, submenu) {
            vm.mDashboard = "";
            vm.mClientes = "";
            vm[menu] = 'active';
        }

        function cargarData() {
            configuracionService.cargar()
                .then(function (data) {
                    vm.config = data;
                });
        }
    }
})();
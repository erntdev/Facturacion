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
        vm.activarDashboard = activarDashboard;
        vm.titulo = "";
        vm.subtitulo = "";
        vm.config = {};
        vm.usuario = {
            nombre: "Ernesto García"
        }

        cargarData();
        activarDashboard();

        function activarDashboard() {
            return activar('mDashboard', '', 'Dashboard', 'Información');
        }

        // Function declaration
        function activar(menu, submenu, titulo, subtitulo) {
            vm.titulo = titulo;
            vm.subtitulo = subtitulo;
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
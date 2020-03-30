(function () {
    "use strict";
    angular.module("ClienteModule")
        .controller('ClienteController', ClienteController);

    ClienteController.$inject = ['ClienteFactory'];

    function ClienteController(clienteFactory) {
        var vm = this;

        vm.clientes = {};
        vm.titulo = "Clientes";
        vm.subtitulo = "Listado";
        clienteFactory.setActive();

        getClients();

        function getClients() {
            clienteFactory.getClient()
                .then(function () {
                    vm.clientes = clienteFactory;
                });
        }
    }
})();

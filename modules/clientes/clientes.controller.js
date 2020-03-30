(function () {
    "use strict";
    angular.module("ClienteModule")
        .controller('ClienteController', ClienteController);

    ClienteController.$inject = ['$routeParams', 'ClienteFactory'];

    function ClienteController($routeParams, clienteFactory) {
        var vm = this;
        var page = $routeParams.pag;

        vm.moveTo = moveTo;
        vm.clientes = {};
        vm.titulo = "Clientes";
        vm.subtitulo = "Listado";
        clienteFactory.setActive();
        moveTo(page);

        function moveTo(page) {
            loadPage(page);
        }

        function loadPage(page) {
            clienteFactory.getClient(page)
                .then(function () {
                    vm.clientes = clienteFactory;
                });
        }
    }
})();

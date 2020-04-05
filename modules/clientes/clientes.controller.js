(function () {
    "use strict";
    angular.module("ClienteModule")
        .controller('ClienteController', ClienteController);

    ClienteController.$inject = ['$routeParams', 'ClienteFactory'];

    function ClienteController($routeParams, clienteFactory) {
        var vm = this;
        var page = $routeParams.pag;

        vm.moveTo = moveTo;
        vm.showModal = showModal;
        vm.save = save;
        vm.resetForm = resetForm;
        vm.clientes = {};
        vm.titulo = "Clientes";
        vm.subtitulo = "Listado";
        vm.information = {};
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

        function showModal(cliente) {
            angular.copy(cliente, vm.information);
            $("#modal-client").modal();
        }

        function save(client, formClient) {
            clienteFactory.save(client).then(function () {
                $("#modal-client").modal('hide');
                vm.information = {};
                formClient.autoValidateFormOptions.resetForm();
            })
        }

        function resetForm(formClient) {
            formClient.autoValidateFormOptions.resetForm();
        }
    }
})();

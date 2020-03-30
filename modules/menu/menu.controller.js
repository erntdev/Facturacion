(function () {
    angular.module("MenuModule")
        .controller("MenuController", MenuController)

    MenuController.$inject = ["MenuFactory"];

    function MenuController(menuFactory) {
        var vm = this;
        vm.getActiveDashboard = getActiveDashboard;
        vm.getActiveCliente = getActiveCliente;

        function getActiveDashboard() {
            return menuFactory.getActiveDashboard();
        }

        function getActiveCliente() {
            return menuFactory.getActiveCliente();
        }
    }
})();
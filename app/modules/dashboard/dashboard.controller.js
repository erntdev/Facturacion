(function () {
    "use strict";
    angular.module("DashboardModule")
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ["DashboardFactory"];

    function DashboardController(dashboardFactory) {
        var vm = this;
        vm.titulo = "Dashboard";
        vm.subtitulo = "Información";
        dashboardFactory.setActive();
    }
})();

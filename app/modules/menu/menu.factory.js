(function () {
    'use strict';
    angular.module("MenuModule")
        .factory("MenuFactory", MenuFactory)

    MenuFactory.$inject = ['SharedMenuFactory'];

    function MenuFactory(sharedMenuFactory) {

        var services = {
            getActiveDashboard: getActiveDashboard,
            getActiveCliente: getActiveCliente
        }

        return services;

        function getActiveDashboard() {
            return sharedMenuFactory.mDashboard;
        }

        function getActiveCliente() {
            return sharedMenuFactory.mCliente;
        }
    }
})();
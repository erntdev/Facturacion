(function () {
    'use strict'
    angular.module("SharedMenuModule")
        .factory("SharedMenuFactory", SharedMenuFactory)

    function SharedMenuFactory() {

        var services = {
            mDashboard: "",
            mCliente: "",
            activar: activar
        }

        return services;

        // Function declaration
        function activar(menu, submenu) {
            services.mDashboard = "";
            services.mCliente = "";
            services[menu] = 'active';
        }
    }
})();
(function () {
    'use strict';

    angular.module("DashboardModule")
        .factory("DashboardFactory", DashboardFactory);

    DashboardFactory.$inject = ['SharedMenuFactory'];

    function DashboardFactory(sharedMenuFactory) {

        var services = {
            setActive: setActive
        }

        return services;

        function setActive() {
            sharedMenuFactory.activar('mDashboard');
        }

    }
})();
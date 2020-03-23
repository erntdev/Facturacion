(function () {
    "use strict";
    angular.module("FacturacionModule")
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'modules/dashboard/dashboard.component.html',
                controller: 'DashboardController'
            })
            .when('/clientes', {
                templateUrl: 'modules/clientes/clientes.component.html',
                controller: 'ClienteController'
            })
            .otherwise({
                redirectTo: "/"
            })
    }
})();
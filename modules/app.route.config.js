(function () {
    "use strict";
    angular.module("FacturacionModule")
        .config(Config);

    Config.$inject = ['$routeProvider'];

    function Config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'modules/dashboard/dashboard.component.html',
                controller: 'DashboardController'
            })
            .when('/clientes/:pag', {
                templateUrl: 'modules/clientes/clientes.component.html',
                controller: 'ClienteController'
            })
            .otherwise({
                redirectTo: "/"
            })
    }
})();
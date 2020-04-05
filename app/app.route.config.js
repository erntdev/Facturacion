(function () {
    "use strict";
    angular.module("FacturacionModule")
        .config(Config);

    Config.$inject = ['$routeProvider'];

    function Config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/modules/dashboard/dashboard.component.html',
                controller: 'DashboardController'
            })
            .when('/clientes/:pag', {
                templateUrl: 'app/modules/clientes/clientes.component.html',
                controller: 'ClienteController'
            })
            .otherwise({
                redirectTo: "/"
            })
    }
})();
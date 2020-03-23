"use strict";

mainApp.config(['$routeProvider', function ($routeProvider) {
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
}]);
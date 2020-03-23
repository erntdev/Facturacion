"use strict";

(function () {
    angular.module("ClienteModule")
        .controller('ClienteController', ['$scope', ClienteController]);

    function ClienteController($scope) {
        $scope.activar('mClientes');
    }
})();

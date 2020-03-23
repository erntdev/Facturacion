(function () {
    "use strict";
    angular.module("DashboardModule")
        .controller('DashboardController', ['$scope', DashboardController]);

    function DashboardController($scope) {
        $scope.activar('mDashboard');
    }
})();

"use strict";

angular.module("DashboardModule")
    .controller('DashboardController', ['$scope', function ($scope) {
        $scope.activar('mDashboard');
    }]);
"use strict";

(function () {
    angular.module("DashboardModule")
        .factory('NotificacionesService', ['$http', '$q', NotificacionesService]);

    function NotificacionesService($http, $q) {
        var self = {
            notificaciones: [
                {
                    icono: "fa-envelope",
                    texto: "4 new messages",
                    tiempo: "3 mins"
                },
                {
                    icono: "fa-users",
                    texto: "8 friend requests",
                    tiempo: "12 hours"
                },
                {
                    icono: "fa-file",
                    texto: "3 new reports",
                    tiempo: "2 days"
                }
            ]
        }

        return self;
    }
})();
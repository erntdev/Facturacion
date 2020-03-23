"use strict";

notificacionesModule.factory('NotificacionesService', ['$http', '$q', function ($http, $q) {
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
}]);
"use strict";

angular.module("FacturacionModule")
    .filter('quitarLetra', function () {
        return function (palabra) {
            if (palabra) {
                if (palabra.length > 1) {
                    return palabra.substring(1);
                } else {
                    return palabra;
                }
            }
        }
    })
    .filter('mensajeCorto', function () {
        return function (mensaje) {
            if (mensaje) {
                if (mensaje.length > 25) {
                    return mensaje.substring(0, 25) + "...";
                }
                return mensaje;
            }
        }
    })
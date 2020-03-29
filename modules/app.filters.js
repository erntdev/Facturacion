(function () {
    "use strict";

    angular.module("FacturacionModule")
        .filter('quitarLetra', QuitarLetraFilter)
        .filter('mensajeCorto', MensajeCortoFilter)

    function QuitarLetraFilter() {
        return function (palabra) {
            if (palabra) {
                if (palabra.length > 1) {
                    return palabra.substring(1);
                } else {
                    return palabra;
                }
            }
        }
    }

    function MensajeCortoFilter() {
        return function (mensaje) {
            if (mensaje) {
                if (mensaje.length > 25) {
                    return mensaje.substring(0, 25) + "...";
                }
                return mensaje;
            }
        }
    }
})();
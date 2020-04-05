(function () {
    'use strict';
    angular.module('jcs-autoValidate')
        .run(DefaultErrorMessageResolver);

    DefaultErrorMessageResolver.$inject = ['defaultErrorMessageResolver'];

    function DefaultErrorMessageResolver(defaultErrorMessageResolver) {
        defaultErrorMessageResolver.setI18nFileRootPath('js');
        defaultErrorMessageResolver.setCulture('es-co');
    }
})();
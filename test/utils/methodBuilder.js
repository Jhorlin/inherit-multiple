(function (module, util) {
    'use strict';
    function methodsBuilder(Class, methods) {
        methods.forEach(function (method) {
            Class.prototype[method] = function () {
            };
        });
        return Class;
    }

    module.exports = methodsBuilder;
}(module, require('util')));
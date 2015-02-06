/**
 * Adds a prototype chain of all the base classes to a child class
 * @module inherit-multiple
 */

(function (module, extend) {
    "use strict";
    /**
     * @example
     * ```javascript
     * function ChildClass(){}
     * function SuperClass(){}
     * SuperClass.prototype.method = function(){};
     * var inheritMultiple = require('inherit-multiple');
     * inheritMultiple(ChildClass, SuperClass, Array);
     * var instance = new ChildClass();
     *```
     * @function inheritMultiple
     * Creates a prototype chain from the super classes for the child class
     * as the prototype of the child class.
     * @param {function} childClass - child class to extend
     * @param {...function} superClasses - super classes to extend the child class with
     * @returns {childClass} Returns the extended child class
     * @alias module:inherit-multiple
     */
    function inheritMultiple(childClass, superClasses) {
        if (arguments.length < 2) {
            throw new Error("Please provide at lest two constructors where the first argument is the child constructor");
        }
        //get an array without the child class;
        var classes = Array.prototype.slice.call(arguments).splice(1,arguments.length - 1);
        //save the child constructor
        var  childConstructor = childClass.prototype.constructor,
        //create a list of prototypes to inherit and reverse the order so that last constructor is the
        //last link in the prototype chain.
            prototypes = classes.map(function (constructor) {
                return constructor.prototype;
            }).reverse(),
            proto = prototypes.reduce(function (superProto, proto) {
                    var inheritedProto = Object.create(superProto);
                    extend(inheritedProto, proto);
                    inheritedProto.constructor = proto.constructor;
                    return inheritedProto;
                },
                // seed the reduce with Object.prototype
                Object.prototype);

        childClass.prototype = Object.create(proto);
        //since we replaced the prototype set the constructor back so that instanceof will work
        childClass.prototype.constructor = childConstructor;
        return childClass;
    }

    module.exports = inheritMultiple;
}(module, require('extend')));
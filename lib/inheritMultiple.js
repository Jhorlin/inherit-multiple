/**
 * inherit-multiple module.
 * @module inherit-multiple
 * @type {function}
 */

(function (module) {
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
     */
    function inheritMultiple(childClass, superClasses) {
        if (arguments.length < 2) {
            throw new Error("Please provide at lest two constructors where the first argument is the child constructor");
        }
        var classes = Array.prototype.slice.call(arguments).unshift(),
        //the first argument is our child class that will inherit from all other super classes
        //save the child constructor
            childConstructor = childClass.prototype.constructor,
        //create a list of prototypes to inherit and reverse the order so that last constructor is the
        //last link in the prototype chain.
            prototypes = classes.map(function (constructor) {
                return constructor.prototype;
            }).reverse(),
            proto = prototypes.reduce(function (superProto, proto) {
                    var inheritedProto = Object.create(superProto, proto);
                    inheritedProto.constructor = proto.constructor;
                    return inheritedProto;
                },// seed the reduce with Object.prototype
                Object.prototype);

        childClass.prototype = Object.create(proto);
        //since we replaced the prototype set the constructor back so that instanceof will work
        childClass.prototype.constructor = childConstructor;
        return childClass;
    }

    module.exports = inheritMultiple;
}(module));
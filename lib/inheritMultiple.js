/**
 * Created by jhorlin.dearmas on 2/4/2015.
 */
(function (module, util) {
    "use strict";
    /**
     * Create a prototype chain based subClasses and set them to a child class
     * @param {function} childCLass - constructor to extend;
     * @param {function} baseClass - super constructor;
     * @returns {childClass}
     */

    module.exports = function (childCLass, baseClass) {
        if (arguments.length < 2) {
            throw new Error("Please provide at lest two constructors where the first argument is the child constructor");
        }
        var classes = Array.prototype.slice.call(arguments),
        //the first argument is our child class that will inherit from all other super classes
            childClass = classes.shift(),
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
    };
}(module));
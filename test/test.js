/**
 * Created by jhorlin.dearmas on 2/2/2015.
 */
(function (should, methodBuilder, inheritMultiple) {
    "use strict";
    describe("test multiple inheritance", function () {
        it("should throw an exception where no argument are passed", function(){
            (function(){
                inheritMultiple();
            }).should.throw("Please provide at lest two constructors where the first argument is the child constructor");
        });

        it("should throw an exception when on argument is passed", function(){
            function ChildClass(){}
            (function(){
                inheritMultiple(ChildClass);
            }).should.throw("Please provide at lest two constructors where the first argument is the child constructor");
        });

        it("should inherit Parent", function(){
            function ChildClass(){}
            function ParentClass(){}
            var parentMethods = ['parentMethod1', 'parentMethod'];
            methodBuilder(ParentClass, parentMethods);
            inheritMultiple(ChildClass, ParentClass);
            var childInstance = new ChildClass();
            childInstance.should.be.an.instanceOf(ChildClass);
            parentMethods.forEach(function(method){
               childInstance.should.have.property(method).which.is.a.Function;
            });
        });

        it("should inherit from Parent and GrandParent", function(){
            function ChildClass(){}
            function ParentClass(){}
            function GrandParentClass(){}
            var parentMethods = ['parentMethod1', 'parentMethod'],
                grandParentMethods = ['grandParentMethod1', 'grandParentMethod'];
            methodBuilder(ParentClass, parentMethods);
            methodBuilder(GrandParentClass, grandParentMethods);
            inheritMultiple(ChildClass, ParentClass, GrandParentClass);
            var childInstance = new ChildClass();
            childInstance.should.be.an.instanceOf(ChildClass);
            parentMethods.concat(grandParentMethods).forEach(function(method){
                childInstance.should.have.property(method).which.is.a.Function;
            });
        });

    });
}(require('should'), require('../test/utils/methodBuilder'), require('../lib/inheritMultiple')));


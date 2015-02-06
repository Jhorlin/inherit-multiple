<a name="module_inherit-multiple"></a>
## inherit-multiple → <code>function</code>
inherit-multiple module.


* [inherit-multiple](#module_inherit-multiple) → <code>function</code>
  * [module.exports](#exp_module_inherit-multiple--module.exports) → <code>inheritMultiple</code> ⏏
    * [~inheritMultipleCreates a prototype chain from the super classes for the child classas the prototype of the child class.(childClass, ...superClasses)](#module_inherit-multiple--module.exports..inheritMultipleCreates a prototype chain from the super classes for the child classas the prototype of the child class.) ⇒ <code>childClass</code>

<a name="exp_module_inherit-multiple--module.exports"></a>
### module.exports → <code>inheritMultiple</code> ⏏
<a name="module_inherit-multiple--module.exports..inheritMultipleCreates a prototype chain from the super classes for the child classas the prototype of the child class."></a>
#### module.exports~inheritMultipleCreates a prototype chain from the super classes for the child classas the prototype of the child class.(childClass, ...superClasses) ⇒ <code>childClass</code>
**Returns**: <code>childClass</code> - Returns the extended child class  

| Param | Type | Description |
| --- | --- | --- |
| childClass | <code>function</code> | child class to extend |
| ...superClasses | <code>function</code> | super classes to extend the child class with |

**Example**  
```javascriptfunction ChildClass(){}function SuperClass(){}SuperClass.prototype.method = function(){};var inheritMultiple = require('inherit-multiple');inheritMultiple(ChildClass, SuperClass, Array);var instance = new ChildClass();```

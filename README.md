## Modules
<dl>
<dt><a href="#module_inherit-multiple">inherit-multiple</a> → <code>function</code></dt>
<dd><p>inheritMultiple module.</p>
</dd>
<dt><a href="#module_lib/inheritMultiple">lib/inheritMultiple</a> → <code>function</code></dt>
<dd><p>inheritMultiple module.</p>
</dd>
</dl>
<a name="module_inherit-multiple"></a>
## inherit-multiple → <code>function</code>
inheritMultiple module.

**See**: module:lib/inheritMultiple  
<a name="module_lib/inheritMultiple"></a>
## lib/inheritMultiple → <code>function</code>
inheritMultiple module.

<a name="module_lib/inheritMultiple..inheritMultipleCreates a prototype chain from the super classes for the child classas the prototype of the child class."></a>
### lib/inheritMultiple~inheritMultipleCreates a prototype chain from the super classes for the child classas the prototype of the child class.(childClass, ...superClasses) ⇒ <code>childClass</code>
**Returns**: <code>childClass</code> - Returns the extended child class  

| Param | Type | Description |
| --- | --- | --- |
| childClass | <code>function</code> | child class to extend |
| ...superClasses | <code>function</code> | super classes to extend the child class with |

**Example**  
```javascriptfunction ChildClass(){}function SuperClass(){}SuperClass.prototype.method = function(){};var inheritMultiple = require('inherit-multiple');inheritMultiple(ChildClass, SuperClass, Array);var instance = new ChildClass();```

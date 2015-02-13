#Inherit Multiple

[![Join the chat at https://gitter.im/Jhorlin/inherit-multiple](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Jhorlin/inherit-multiple?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
Extends a child class by creating a prototype chain out of the base class(es)
----
[![view on npm](http://img.shields.io/npm/v/inherit-multiple.svg)](https://www.npmjs.org/package/inherit-multiple)
[![npm module downloads per month](http://img.shields.io/npm/dm/inherit-multiple.svg)](https://www.npmjs.org/package/inherit-multiple)
[![Build Status](https://travis-ci.org/Jhorlin/inherit-multiple.svg?branch=master)](https://travis-ci.org/Jhorlin/inherit-multiple)
[![Dependency Status](https://david-dm.org/Jhorlin/inherit-multiple.svg)](https://david-dm.org/Jhorlin/inherit-multiple)
## Usage
Install
`$ npm install inherit-multiple`
Test
`$ npm test`
Document
`$ npm run doc`

### Library
## Modules
<table>
  <thead>
    <tr>
      <th>Module</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td><a href="#module_inherit-multiple">inherit-multiple</a></td>
    <td><p>Adds a prototype chain of all the base classes to a child class</p>
</td>
    </tr>
</tbody>
</table>


<a name="module_inherit-multiple"></a>
## inherit-multiple
Adds a prototype chain of all the base classes to a child class

<a name="module_inherit-multiple..inheritMultipleCreates a prototype chain from the super classes for the child classas the prototype of the child class."></a>
### inherit-multiple~inheritMultipleCreates a prototype chain from the super classes for the child classas the prototype of the child class.(childClass, ...superClasses) ⇒ <code>childClass</code>
**Returns**: <code>childClass</code> - Returns the extended child class  

| Param | Type | Description |
| --- | --- | --- |
| childClass | <code>function</code> | child class to extend |
| ...superClasses | <code>function</code> | super classes to extend the child class with |

**Example**  
```javascriptfunction ChildClass(){}function SuperClass(){}SuperClass.prototype.method = function(){};var inheritMultiple = require('inherit-multiple');inheritMultiple(ChildClass, SuperClass, Array);var instance = new ChildClass();```


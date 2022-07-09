/*
* @inherit.js
* @deprecated 
* @author czh
* @update (czh 2022/7/7)
*/

function inherit1(){

  function parent(){
    this.name = 'a'
  }
  function child(){
    parent.call(this)
    this.name = 'a'
  }
  function clone(childClass,parentClass){
    childClass.prototype = Object.create(parentClass.prototype)
    childClass.prototype.constructor = child
  }
  /****************/
  function childGouzao(){
    parent.call(this)
    this.name = 'a'
  }
  /**************/
  function childYxl(){
    this.name = 'a'
  }
  childYxl.prototype = new parent()
}

function inherit2(){
  function parent(){
    this.name = 'parent'
  }
  function child(){
    parent.call(this)
    this.name = 'child'
  }
  function clone(childClass,parentClass){
    childClass.prototype = Object.create(parentClass.prototype)
    childClass.prototype.constructor = child
  }
  clone(child,parent)
  // 构造函数继承
  function childConstructor(){
    parent.call(this)
    this.name = 'child'
  }
  // 原型链继承
  function childPropto(){
    this.name = 'child'
  }
  childPropto.prototype = new parent()
}

const inhert3 = function (){
  function parent(){
    this.name = 'parent'
  }
  function child(){
    parent.call(this)
    this.name = 'child'
  }
  function clone(childClass,parentClass){
    childClass.prototype = Object.create(parentClass.prototype)
    childClass.prototype.constructor = child
  }
  // 构造器继承
  function childConstructor(){
    parent.call(this)
    this.name = 'child'
  }
  // 原型链继承
  function childProto(){
    this.name = 'child'
  }
  childProto.prototype = new parent()
}
function inhert4(){
  function parent(){
    this.name = 'parent'
  }
  function child(){
    parent.call(this)
    this.name = 'child'
  }

  function clone() {
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child()
  }

  function childConstructor(){
    parent.call(this)
    this.name = 'child'
  }
  function childProto(){
    this.name = 'child'
  }
  childProto.prototype = new parent()
}
function inhert4(){
  function parent(){
    this.name = 'parent'
  }
  function child(){
    parent.call(this)
    this.name = 'child'
  }
  function extend(child,parent){
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
  }
  function childProto(){
    this.name = 'child'
  }
  childProto.prototype = new parent()
  function childConstructor(){
    parent.call(this)
    this.name = 'child'
  }
}
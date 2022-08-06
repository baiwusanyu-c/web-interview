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

function inhert5(){
  function parent(){
    this.name = 'parent'
  }
  function child(){
    parent.call(this)
    this.name = 'child'
  }
  function clone(){
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
  }
  ///
  function childConstructor(){
    parent.call(this)
    this.name = 'child'
  }
  function childProto(){

    this.name = 'child'
  }
  childProto.prototype = new parent()
}


function inhert6 (){
  function parent(){
    this.name = 1
  }
  function child(){
    parent.call(this)
    this.name = 2
  }
  function jszh(child,parent){
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = parent
  }

  function zuhe(){
    parent.call(this)
    this.name = 2
  }

  // 原型链继承

  function yxljc(){
    this.name = 3
  }
  yxljc.prototype = new parent()
}


function inhert7 (){
  // 寄生组合
  function parent(){
    this.nameP = 'parent'
  }
  function child(){
    parent.call(this)
    this.nameC = 'child'
  }
  function Jszh(){
    child.prototype = Object.create(parent.prototype)
    child.prototype.constructor = child
  }
  // 寄生式
  function childs(){
    parent.call(this)
    this.nameC = 'child'
  }
  // 构造函数继承
  child.prototype = new parent()
}
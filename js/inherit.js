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
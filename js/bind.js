/*
* @bind.js
* @deprecated 
* @author czh
* @update (czh 2022/7/6)
*/
Function.prototype.myBind1 = function (target,...arg){
  if(typeof this !== 'function'){
    throw Error
  }
  let orgThis = this
  let orgArg = arg
   function fn(...argFn){
    if(this instanceof fn){
      return new orgThis(...orgArg,...argFn)
    }
    return orgThis.apply(target,orgArg.concat(argFn))
  }
  fn.prototype = orgThis.prototype;
  return fn
}

Function.prototype.myBind2 = function (target,...arg){
  if(typeof this !== 'function'){
    throw Error
  }
  let orgThis = this
  let orgArg = arg
  function fn(...fnArg){
    if(this instanceof fn){
      return new orgThis(...orgArg,...fnArg)
    }
    return orgThis.apply(target,orgArg.concat(fnArg))
  }
  fn.prototype = orgThis.prototype
  return fn
}

Function.prototype.myBind3 = function (target,...arg){
  if(typeof this !== "function"){
    throw Error
  }
  let orgThis = this
  let orgArg = arg
  function fn(...argFn){
    if(this instanceof fn){
      return new orgThis(...orgArg,...argFn)
    }
    return orgThis.apply(target,orgArg.concat(argFn))
  }
  fn.prototype = orgThis.prototype
  return fn

}
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

Function.prototype.bind4 = function (target,...arg){
  if (typeof target !== "function"){
    throw Error
  }
  let orgThis = this
  let orgArg = arg
  function fn(...fnArg){
    if(this instanceof fn){
      return new orgThis(...orgArg,...fnArg)
    }
    return orgThis.apply(target,...orgArg,...fnArg)
  }
  fn.prototype = orgThis.prototype
  return fn
}

Function.prototype.bind5 = function (target,...arg){
  if(typeof target !== 'function'){
    throw Error
  }
  let orgThis = this
  let orgArg = arg
  function fn(...fnArg){
    if(this instanceof fn){
      return new orgThis(...orgArg,...fnArg)
    }
    return orgThis.apply(...orgArg,...fnArg)
  }
  fn.prototype = orgThis.prototype
  return fn
}

Function.prototype.bind6 = function (target,...arg){
  if(typeof target !== 'function'){
    throw Error
  }
  let orgThis = this
  let orgArg = arg
  function fn(...fnArg){
    if(this instanceof fn){
      return new orgThis(...orgArg,...fnArg)
    }
    return orgThis.apply(...orgArg,...fnArg)
  }
  fn.prototype = orgThis.prototype
  return fn
}

Function.prototype.bind7 = function (target,...arg){
  if(typeof target !== 'function'){
    throw Error
  }
  let orgThis = this
  let orgArg = arg
  function fn(...fnArg){
    if(this instanceof fn){
      return new orgThis(...orgArg,...fnArg)
    }
    return orgThis.call(target,orgArg.concat(fnArg))
  }
  fn.prototype = orgThis.prototype
  return fn
}

Function.prototype.bind8 = function (target,...arg){
  if(typeof target !== 'function'){
    throw Error
  }
  let orgThis = this
  let orgArg = arg
  function fn(...argFn){
    if(this instanceof fn){
      return new orgThis(...orgArg,...argFn)
    }
    return orgThis.call(target,orgArg.concat(argFn))
  }
  fn.prototype = orgThis.prototype
  return fn
}
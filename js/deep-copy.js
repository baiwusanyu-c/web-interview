/*
* @deep-copy.js
* @deprecated 
* @author czh
* @update (czh 2022/7/6)
*/
const deepCopy1 = (target,hash = new WeakMap()) =>{
  if(target === undefined || target === null) return target
  if(target instanceof Date) return new Date(target)
  if (target instanceof  RegExp) return  new RegExp(target)
  if(typeof target === 'object') return target
  if(hash.get(target)) return hash.get(target)
  // !!!!
  let copyTarget = new target.constructor()
  // !!!!
  hash.set(target, copyTarget)
  for(let key in target){
    if(target.hasOwnProperty(key)){
      copyTarget = deepCopy1(target[key],hash)
    }
  }
  return copyTarget
}

const deepCopy2 = (target,hash = new WeakMap()) =>{
  if(target === undefined || target === null) return target
  if(target instanceof Date) return  new Date(target)
  if (target instanceof RegExp) return new RegExp(target)
  if(typeof target === 'object') return target
  if(hash.get(target)) return hash.get(target)
  let copyTarget = new target.constructor()
  hash.set(target,copyTarget)
  for(let key in target){
    if(target.hasOwnProperty(key)){
      copyTarget = deepCopy2(target[key],hash)
    }
  }
  return copyTarget
}

const deepCopy3 = function (target,hash = new WeakMap()){
  if(target === undefined || target === null) return target
  if(target instanceof Date) return  new Date(target)
  if (target instanceof RegExp) return new RegExp(target)
  // 处理数组、基本数据类型
  if(typeof target !== 'object') return target
  if(hash.get(target)) return hash.get(target)
  let copyTarget = new target.constructor()
  hash.set(target,copyTarget)
  for(let key in target){
    if (target.hasOwnProperty(key)){
      copyTarget = deepCopy3(target[key],hash)
    }
  }
  return copyTarget
}
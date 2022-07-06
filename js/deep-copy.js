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
  let copyTarget = target.constructor()
  //hash.set(target, copyTarget)
  for(let key in target){
    if(tar.hasOwnProperty(key)){
      copyTarget = deepCopy1(target[key],hash)
    }
  }
  return copyTarget
}
/*
* @curry.js
* @deprecated 
* @author czh
* @update (czh 2022/7/6)
*/
function curry(fn, len) {
    len = fn.length || len
    let _this = this
    return function () {
        let arg = Array.from(arguments)
        if (len > arg.length) {
            return curry(fn.bind(_this, ...arg), len - arg.length)
        } else {
            return fn.call(_this, ...arg)
        }
    }
}

function curry1(fn,len){
    let length = fn.length || len
    let _this = this
    return function (){
        let arg = Array.from(arguments)
        if(arg.length < length){
            return curry1(fn.bind(_this,...arg),length - arg.length)
        }else{
            return fn.apply(_this,...arg)
        }
    }
}

function curry2(fn,len){
    let length = fn.length || len
    let _this = this
    return function (){
        let arg = Array.from(arguments)
        if(arg.length < length){
            return curry2(fn.bind(_this,...arg),length - arg.length)
        }else{
            return fn.apply(_this,...arg)
        }
    }
}
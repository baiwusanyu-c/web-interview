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
            return fn.apply(_this,[...arg])
        }
    }
}

function curry3(fn,len){
    let length = fn.length || len
    let _this = this
    return function (){
        let arg = Array.from(arguments)
        if(arg.length < length){
            return curry3(fn.bind(_this,...arg),length - arg)
        }else{
            return fn.apply(this,...arg)
        }
    }

}

function curry4(fn,len){
    let length = fn.length || len
    let _this = this
    return function (){
        let arg = Array.from(arguments)
        if(arg.length < length){
            return curry4(fn.bind(_this,...arg),length - arg.length)
        }else{
            return fn.apply(_this,arg)
        }
    }
}

function curry5(fn,len){
    let leng = fn.length || len
    return function (...arg){
        let args = [...arg]
        if(arg.length < leng){
            return curry5(fn.bind(this,arg, leng - arg.length))
        }else{
            return fn.apply(this,args)
        }
    }
}

function curry6(fn,len){
    let length = fn.length || len
    return function (){
        let arg = [...arguments]
        if(arg.length < length){
            return curry6(fn.bind(this,arg),length - arg.length )
        }else{
            return fn.apply(this,arg)
        }
    }
}
function curry7(fn,len){
    let length = fn.length || len
    let _this = this
    return function (...arg){
        let args = [...arg]
        if(args.length < length){
            return curry7(fn.bind(_this,...args), length - args.length)
        }else{
            fn.call(_this,...args)
        }
    }

}
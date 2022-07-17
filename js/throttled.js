/**
 * 单位时间内只响应一次事件触发
 */

function throttled(fn,deley){
    let timer = null
    let startTime = Date.now()
    return function (){
        let arg = arguments
        let curTime = Date.now()
        let yuTime = deley - (curTime - startTime)
        if(timer) clearTimeout(timer)
        if(yuTime <= 0){
            fn.apply(this,arg)
            startTime = Date.now()
        }else{
            timer = setTimeout(fn,yuTime)
        }
    }
}
function throttled2(fn,delay){
    let timer
    let startTime = Date.now()
    return function (){
        let _this = this
        let curTime = Date.now()
        let arg = [...arguments]
        let yuTime = delay - (curTime - startTime)
        if(timer) clearTimeout(timer)
        if(yuTime <= 0){
            fn.apply(_this,arg)
            startTime = Date.now()
        }else{
            timer = setTimeout(fn,yuTime)
        }
    }
}

function throttled3(fn,delay){
    let timer
    let startTime = Date.now()
    return function (){
        let _this = this
        let arg = [...arguments]
        let curTime = Date.now()
        let yuTime = delay - (curTime - startTime)
        if(timer) clearTimeout(timer)
        if(yuTime <= 0){
            fn.apply(_this,arg)
            startTime = Date.now()
        }else{
            timer = setTimeout(fn,yuTime)
        }
    }
}

function throttled4(fn,delay){
    let timer
    let startTime = Date.now()
    return function (){
        let _this = this
        let curTime = Date.now()
        let arg = [...arguments]
        let yuTime = delay - (curTime - startTime)
        if(timer) clearTimeout(timer)
        if(yuTime <= 0){
            fn.apply(_this,arg)
            startTime = Date.now()
        }else {
            timer = setTimeout(fn,yuTime)
        }
    }
}
function throttled4(fn,delay){
    let timer
    let startTime = Date.now()
    return function (...arg){
        let _this = this
        let curTime = Date.now()
        let yuTime = delay - (curTime - startTime)
        if(timer) clearTimeout(timer)
        if(yuTime <= 0){
            fn.apply(_this,arg)
            startTime = Date.now()
        }else{
            timer = setTimeout(fn,yuTime)
        }
    }
}
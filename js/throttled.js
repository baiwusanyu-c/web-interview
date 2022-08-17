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
function throttled5(fn,delay){
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
function throttled6(fn,delay){
    let timer
    let startTime = Date.now()
    return function (...arg){
        if(timer) clearTimeout(timer)
        let curTime = Date.now()
        let _this = this
        let yuTime = delay - (curTime - startTime)
        if(yuTime <= 0){
            fn.apply(_this,[...arg])
            startTime = Date.now()
        }else{
            timer = setTimeout(fn,...arg)
        }
    }
}
function throttled7(fn,deley){
    let timer
    let startTime = Date.now()
    return function (...arg){
        let _this = this
        let curTime = Date.now()
        let yuTime = deley - (curTime - startTime)
        if(timer) clearTimeout(timer)
        if(yuTime <= 0){
            fn.apply(_this,arg)
            startTime = Date.now()
        }else{
            timer = setTimeout(fn,yuTime)
        }
    }
}
/*
effect(()=>{
    if(a.value){
        console.log(b.value)
    }
})

trackOpbit 当前层的依赖标记，= 0
effectDepth 当前层数，= 1
maxEffectDepth 最大嵌套层数 = 30?
try...finally
trackOpbit = 1 << ++effectDepth => 2
effectDepth < maxEffectDepth  全清空

initDepMarker =》{
    deps.length > 0 => dep.w |= trackOpbit
}
dep.n -》是否时当前层最新收集的
dep.w -》是否是之前轮收集过

=> this.fn -> track ->
newTracked -> dep.n & trackOpbit
wasTracked -> dep.w & trackOpbit

if(!newTracked){ // 0 & 2 = 0 => 取反 => true
    dep.n |= trackOpbit // 0 |= 2 -> dep.n = 2
    if(!wasTracked){ // 0 & 2 = 0 => 取反 => true
        shouldTrack = true
    }
}
effect.deps.length = 2
run over,
finally

finishDepMarker => 1.dep.n,w => 0  2.///

a = false,
trackOpbit = 1 << ++effectDepth => 2
=>initDepMarker => deps.length = 2 => depA.w |= trackOpbit => depA.w = 2
depB.w |= trackOpbit => depB.w = 2
=> this.fn -> track ->
newTrack => depA.n = 2
wasTracked => depA.w = 2 => 2 & 2 => 2 取反=》false
shouldTrack = false
避免重复收集，
run over,
finishDepMarker => 1.dep.n,w => 0  2.///
遍历 deps，
wasTracked && ！newTrack =》 删除依赖
A:true, dep.n -> 2=> 2 & 2 = 2 取反 =》 false    true && false
A:dep.w = 2 -》 2 & 2 = 2 =》 true，dep.n = 0 =》  0 & 2 = 0 取反 -》 true  =》  true && true =》 要删除*/

/**
 * 等到单位时间到达后再执行一次，期间多次触发重新计时
 */
function debounce(fn,deley,imediate){
    let timer
    return function (){
        let _this = this
        if(timer){
            clearTimeout(timer)
        }
        if(imediate){
            let callNow = !timer
            timer = setTimeout(()=>{
                timer = null
            },deley)
            if(callNow){
                fn.apply(_this,[...arguments])
            }

        }else{
            timer = setTimeout(()=>{
                fn.apply(_this,[...arguments])
            },deley)
        }
    }
}

function debounce2(fn,delay,immediate){
    let timer
    return function (){
        let arg = [...arguments]
        let _this = this
        if(timer) clearTimeout(timer)
        if(immediate){
            let callNow = !timer
            timer = setTimeout(()=>{
                timer = null
            },delay)
            if(callNow){
                fn.apply(_this,arg)
            }
        }else{
            timer = setTimeout(()=>{
                fn.apply(_this,arg)
            },delay)
        }

    }
}

function debounce3(fn,delay,immediate){
    let timer
    return function (){
        let arg = [...arguments]
        let _this = this
        if(timer) clearTimeout(timer)
        if(immediate){
            let callNow = !timer
            timer = setTimeout(()=>{
                timer = null
            },delay)
            if(callNow){
                fn.apply(_this,arg)
            }
        }
        timer = setTimeout(()=>{
            fn.apply(_this,arg)
        },delay)
    }

}
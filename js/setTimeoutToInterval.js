function mySetInterval() {
    mySetInterval.timer = setTimeout(() => {
        arguments[0]()
        mySetInterval(...arguments)
    }, arguments[1])
}

mySetInterval.clear = function() {
    clearTimeout(mySetInterval.timer)
}


function myInterval (...arg){
    myInterval.timer = setTimeout(()=>{
        arg[0]()
        myInterval(...arg)
    },arg[1])
}
myInterval.clear = ()=>{
    clearTimeout(myInterval.timer)
}

function mySetInterval(...arg){
    mySetInterval.timer = setTimeout(()=>{
        arg[0]()
        mySetInterval(...arg)
    },arg[1])
}
mySetInterval.clear = function (){
    clearTimeout(mySetInterval.timer)
}
function mySetinterVal(...arg){
    mySetinterVal.timer = setTimeout(()=>{
        arg[0]()
        mySetinterVal(...arg)
    },arg[1])
}
mySetinterVal.clear = function (){
    clearTimeout(mySetInterval.timer)
}
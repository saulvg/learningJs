'use strict'

//Option 1

let sec =  0
let min = 0
let hour = 0

function timer () {
    const timerSection = document.querySelector('.mainDiv')
    timerSection.innerHTML = `
    <div style="display:flex; flex-direction:row">
        <div id='hour'>${hour<10 ? '0' + hour : hour}</div> :
        <div id='min'>${min<10 ? '0' + min : min}</div> :
        <div id='sec'>${sec<10 ? '0'+ sec : sec}</div> 
    </div>
` 
    setTimeout(addTime, 1000)
} 


function addTime () {
    
    sec++
    if (sec > 10) {
        sec = 0
        min++
    }
    if (min > 60) {
        min = 0
        hour++
    }
    timer()
}

addTime()


// Clousure

function generarContador(valor){
    return ()=> valor +=1

}
const constador = generarContador(1)
console.log(constador());
console.log(constador());
console.log(constador());
console.log(constador());

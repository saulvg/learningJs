/* 'use strict'
//While
let a = 1
let b = 5
while(a <= b) {
    console.log('Lap', a);
    a++
}

console.log('I have done', a-1, 'laps');



//For
let asterisk = ''
for(let i = 1; i < a; i++){
    asterisk += '*'
    console.log(asterisk);
}

//Nested for (multiplication tables)
let nTables = 10
let nNumberTablet = 10

for (let i = 1; i <= nTables; i++){
    console.log('Table of', i);
    for(let d = 0; d <= nNumberTablet; d++){
        console.log(`${d} * ${i} = ${d * i}`);
    }
} */

//Prime numbers
let num = 10
let printt
for (let i = 2; i < num; i++){
    if (num % i === 0){ 
        printt = 'No es primo'
    }else {
        printt = 'Es primo'
    }
}
console.log(printt);
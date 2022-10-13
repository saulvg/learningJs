'use strict'
//Break
let i;
for(i = 1; i < 10; i++){
    console.log('Lap', i);
    if(i % 5 === 0){
        break
    }
    
}
console.log(`The loop has broken on lap ${i}`);


//Continue

for(i = 1; i <= 10; i++){

    if(i === 5){
        console.log(`We spkipped lap ${i}`);
        continue
    }
    console.log('Lap', i);

}
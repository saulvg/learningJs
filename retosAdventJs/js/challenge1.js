
function start(){
    const statement = [
        'Este año los elfos han comprado una máquina que envuelve regalos. Pero… ¡no viene programada! Necesitamos crear un algoritmo que le ayude en la tarea.',
        'A la máquina se le pasa un array con los regalos. Cada regalo es un string. Necesitamos que la máquina envuelva cada regalo en papel de regalo y lo coloque en un array de regalos envueltos.',
        'El papel de regalo es el símbolo * y para envolver un regalo se coloca el símbolo * de forma que rodee totalmente al string por todos los lados. Por ejemplo:',
        '*****<br/>*cat*<br/>*****'
    ]
    const gifts = ['cat', 'game', 'socks']
    wrapping(gifts)
    writeStatement(statement)
}
start();



function wrapping(gifts) {
//Genero un nuevo array para ahadir los regalos envueltos
    const newArray = [];

    //Creo un bucle que recorra el array de regalos sin envolver
    for (const gif of gifts) {
        //Variable que vamos a ir modificando por los diferentes bucles para envolver a si los regalso
        let envolver = ''
        //Bucle para envolver el regalo por los dos lados
        for (let a = 0; a < 2; a++) {
            //Bucle para envolver el regalo segun su longuitud + los extremos
            for(let i = 0; i < gif.length + 2; i++){
                envolver += '*'
            }
            //Si ya hemos envuelto un lado del regalo
            if(a<1){
                envolver += '\n*'+gif+'*\n';
            }   
        }
        newArray.push(envolver)
    }
    console.log(newArray);
    return newArray
}


  
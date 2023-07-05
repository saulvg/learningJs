
function start(){
    const statement = [
        'Tienes una caja de regalos de Navidad que Santa Claus quiere entregar a los niños. Cada regalo está representado por una cadena. Santa Claus tiene un trineo que puede llevar un peso limitado, y cada regalo dentro de la caja tiene un peso que es igual al número de letras en el nombre del regalo.',
        'Santa Claus también tiene una lista de renos que pueden ayudarlo a entregar los regalos. Cada reno tiene un límite de peso máximo que puede llevar. El límite de peso máximo de cada reno es igual a dos veces el número de letras en su nombre.',
        'Tu tarea es implementar una función distributeGifts(packOfGifts, reindeers) que recibe una caja de regalos y una lista de renos y devuelve el número máximo de cajas de estos regalos que Santa Claus puede entregar a los niños. Las cajas de regalos no se pueden dividir.',
        'Renos -> dasher, dancer',
        'Regalos -> book, doll, ball'
    ]
    const packOfGifts = ["book", "doll", "ball", 'papa']
    const reindeers = ["dasher", "dancer"]
    // el pack de regalos pesa 4 + 4 + 4 = 12
    // los renos pueden llevar (2 * 6) + (2 * 6) = 24
    // por lo tanto, Santa Claus puede entregar 2 cajas de regalos

    distributeGifts(packOfGifts, reindeers) // 2
    writeStatement(statement)
}
start();



function distributeGifts(packOfGifts, reindeers) {
    //Peso de los regalos
    const weightOfGifts = packOfGifts.map(g => g.length)
    
    //Peso que pueden llevar los renos
    const weightOfReindeers = reindeers.map(r => r.length *2)

    //Numero maximo de cajas que se pueden entregar
    let maxGifts = 0;

    for (let j = 0; j < weightOfReindeers.length; j++) {
        let currentReindeer = weightOfReindeers[j]
        for (let i = 0; i < weightOfGifts.length; i++) {
            
            if(currentReindeer >= weightOfGifts[i]){
               
                currentReindeer -= weightOfGifts[i]
            }
        }

        maxGifts ++
            
    }

    console.log(maxGifts);
    return(maxGifts)

}


  
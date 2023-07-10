
function start(){
    const statement = [
        'Santa Claus necesita hacer una revisión de sus cajas de regalos para asegurarse de que puede empaquetarlas todas en su trineo. Cuenta con una serie de cajas de diferentes tamaños, que se caracterizan por su longitud, anchura y altura.',
        'Tu tarea es escribir una función que, dada una lista de cajas con sus tamaños, determine si es posible empaquetar todas las cajas en una sola de manera que cada caja contenga a otra (que a su vez contenga a otra, y así sucesivamente).',
        'Cada caja representa sus medidas con un objeto. Por ejemplo: {l: 2, w: 3, h: 2}. Esto significa que la caja tiene una longitud de 2, una anchura de 3 y una altura de 2.',
        'Una caja entra en otra caja si todos los lados de la primera son menores a los lados de la segunda. Los elfos nos han dicho que las cajas no se pueden rotar, así que no se puede poner una caja de 2x3x2 en una caja de 3x2x2. Veamos unos ejemplos:',
    ]
    /* 
    fitsInOneBox([
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 }
    ]) // true
    En el ejemplo anterior, la caja más pequeña entra en la caja más grande. Por lo tanto, es posible empaquetar todas las cajas en una sola. Ahora veamos un caso que no:

    const boxes = [
        { l: 1, w: 1, h: 1 },
        { l: 2, w: 2, h: 2 },
        { l: 3, w: 1, h: 3 }
    ]

    fitsInOneBox(boxes) // false
    En el ejemplo anterior, la caja más pequeña entra en la caja del medio, pero la caja del medio no entra en la caja más grande. Por lo tanto, no es posible empaquetar todas las cajas en una sola.

    Ten en cuenta que las cajas pueden no venir en orden:

    const boxes = [
        { l: 1, w: 1, h: 1 },
        { l: 3, w: 3, h: 3 },
        { l: 2, w: 2, h: 2 }
    ]

    fitsInOneBox(boxes) // true
    En el ejemplo anterior, la primer caja cabe en la tercera, y la tercera en la segunda. Por lo tanto, es posible empaquetar todas las cajas en una sola.

    Cosas a tener en cuenta:

    Las cajas no se pueden rotar ya que los elfos nos han dicho que la máquina no está preparada.
    Las cajas pueden venir desordenadas de tamaño.
    Las cajas no son siempre cuadradas, pueden ser rectangulares.
    
    */

    const boxes = [
        { l: 1, w: 1, h: 1 },
        { l: 3, w: 3, h: 3 },
        { l: 2, w: 2, h: 2 }
    ]
    writeStatement(statement)
    fitsInOneBox(boxes)
}
start();



function fitsInOneBox(boxes) {

    //Ordenamos el array por la longitud
    const orderBoxes = boxes.sort((a, b) => {
        return a.l - b.l
    })

    //Constante bandera para determinar si las cajas caben una dentro de otra
    let beside = false
    
    //Bucle para comprobar si caben 
    for (let i = 0; i < orderBoxes.length; i++) {
        //objeto caja que se esta recorriedo
        const currentBox = orderBoxes[i];
        //siguiente caja que se va a recorrer
        const nextBox = orderBoxes[i + 1]
        
        //Comprobaciones de si las medidas son inferiores a las de su proxima caja
        const checkL = currentBox.l < nextBox?.l
        const checkW = currentBox.w < nextBox?.w 
        const checkH = currentBox.h < nextBox?.h 

        //Si se cumplen todas las condiciones las cajas entrar
        if (checkL && checkW && checkH) {
            beside = true

        //Si no se cumplen las condiciones y la ultima caja (no existe) es diferente a undefined no caben detenemos el bucle, no hace falta comprobar mas
        }else if (nextBox !== undefined) {
            beside = false
            break
        }
        
    }

    console.log(beside);
    return beside
  }

  /* 
  function fitsInOneBox(boxes) {

    //Ordenamos el array por la longitud
    const orderBoxes = boxes.sort((a, b) => {
        return a.l - b.l
    })
    
    //Bucle para comprobar si caben 
    for (let i = 0; i < orderBoxes.length; i++) {
        //objeto caja que se esta recorriedo
        const currentBox = orderBoxes[i];
        //siguiente caja que se va a recorrer
        const nextBox = orderBoxes[i + 1]

        if (currentBox && nextBox) continue
        
        //Comprobaciones de si las medidas son inferiores a las de su proxima caja
        const checkL = currentBox.l >= nextBox?.l
        const checkW = currentBox.w >= nextBox?.w 
        const checkH = currentBox.h >= nextBox?.h 

        //Si se cumplen todas las condiciones las cajas entrar
        if (checkL && checkW && checkH) {
            return  false

        //Si no se cumplen las condiciones y la ultima caja (no existe) es diferente a undefined no caben detenemos el bucle, no hace falta comprobar mas
        }
        
    }
    return true
  }

  
  */


  
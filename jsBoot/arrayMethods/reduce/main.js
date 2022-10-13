'use strict'
const mascotas = [
    { nombre: 'Pelusa', edad: 12, tipo: 'gato'},
    { nombre: 'Puchini', edad: 12, tipo: 'perro'},
    { nombre: 'Pulga', edad: 10, tipo: 'perro'},
    { nombre: 'Chanchito feliz', edad: 3, tipo: 'perro'},
]
const indexar = mascotas.reduce((acc, valor) => ({...acc, [valor.nombre]:valor}), {})
console.log(indexar);


const anidado = [1, [2, 3], 4, [5]];
const concatenar = anidado.reduce((acc, valor) => acc.concat(valor),[])
console.log(concatenar);

const sumar = concatenar.reduce((acc, valor) => acc + valor, 0)
console.log(sumar);

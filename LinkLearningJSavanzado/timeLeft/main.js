'use strict'

const futureDate = new Date('2023-07-24')

//Para calcular el numero de milisegundos que hay en un anno, un mes... 
//1000(n de milisegundos en un seguno), 60(n de segundos en un minuto), 60(n de minutos en una hora), 24(n de horas en un dia), 365(dias al anno)
const ms_anno = 1000 * 60 * 60 * 24 * 365
const ms_mes = 1000 * 60 * 60 * 24 * 30 
const ms_dia = 1000 * 60 * 60 * 24 
const ms_hora = 1000 * 60 * 60 
const ms_minuto = 1000 * 60 
const ms_segundo = 1000




setInterval(() => {
    const todayDate = new Date()
    let resto
    const difMilisegundos = Math.abs(futureDate - todayDate) 
    const annos = Math.floor(difMilisegundos  / ms_anno)
    resto = difMilisegundos % ms_anno
    const meses = Math.floor(resto/ms_mes)
    resto %= ms_mes
    const dias = Math.floor(resto/ms_dia)
    resto %= ms_dia
    const horas = Math.floor(resto/ms_hora)
    resto %= ms_hora
    const minutos = Math.floor(resto/ms_minuto)
    resto %= ms_minuto
    const segundos = Math.floor(resto/ms_segundo)

    document.querySelector('.mainDiv').innerHTML = `
    Falta${annos < 10 ? '' : 'n'}
    ${annos} anno${annos < 10 ? '' : 's'},
    ${meses} meses,
    ${dias} dias,
    ${horas} horas,
    ${minutos} minutos,
    ${segundos} segunos
    `

}, 1000)




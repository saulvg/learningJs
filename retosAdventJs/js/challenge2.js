
function start(){
    const statement = [
        'Un millonario ha comprado una red social y no trae buenas noticias. Ha anunciado que cada vez que una jornada de trabajo se pierde por un día festivo, habrá que compensarlo con dos horas extra otro día de ese mismo año.',
        'Obviamente la gente que trabaja en la empresa no le ha hecho ni pizca de gracia y están preparando un programa que les diga el número de horas extras que harían en el año si se aplicara la nueva norma.',
        'Al ser trabajo de oficina, su horario laboral es de lunes a viernes. Así que sólo tienes que preocuparte de los días festivos que caen en esos días.',
        'Dado un año y un array con las fechas de los días festivos, devuelve el número de horas extra que se harían ese año:'
    ]
    const year = 2022
    const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD
    // 01/06 es el 6 de enero, jueves. Cuenta.
    // 04/01 es el 1 de abril, un viernes. Cuenta.
    // 12/25 es el 25 de diciembre, un domingo. No cuenta.

    countHours(year, holidays) // 2 días -> 4 horas extra en el año
    writeStatement(statement)
}
start();



function countHours(year, holidays) {
    //Inicializamos una variable con las horas extra, para ir acumulandolas
  let extraHours = 0;

  //Inicializamos una variable con el comienzo del año especificado en los atributos de la funcion con el mes 0 (enero) dia 1 
  const startYear = new Date(year, 0, 1);

  //Inicializamos una variable con el final del año especificado en los atributos de la funcion con el mes 11 (diciembre) dia 31
  const endYear = new Date(year, 11, 31);
  
  //Mientras el dia actual que estemos recorriendo sea mas pequeho o igual que el final del aho reacemos 
  while(startYear <= endYear){
     
      //Obtenemos el numero de ese dia 1, 2, 3, o el que sea
      const getdate = startYear.getDate() 
  
      //Obtenemos el dia de la semana de un array ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      const getday = startYear.getDay()    
  
      //Formateamos la fecha para que luzca como queremso sin usar dependencias como momentjs
      const getMonth = startYear.getMonth() + 1 < 10 ? `0${startYear.getMonth() + 1}` : startYear.getMonth() + 1
      const getDay = getdate < 10 ? `0${getdate}` : getdate
  
      //Comprobamos si holidays incluye el valor de la fecha actual formateada 
      const isHoliday = holidays.includes(`${getMonth}/${getDay}`)
  
      //Comprobamos si es fin de semana
      const weekEnd = getday === 0 || getday === 6;    
  
      //Si no es fin de semana pero si vacaciones, sumamos dos horas a horas extra al aho
      if(!weekEnd && isHoliday){
          extraHours += 2
      }
  
      //Sumamos un dia 
      //Asignamos al valor startYear el valor del dia siguiente sumandole uno gracias a setDate();
      startYear.setDate( startYear.getDate() + 1)
              
  }
  console.log(extraHours);
    return extraHours
}


  
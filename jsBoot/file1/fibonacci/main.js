'use strict'
//Recursividad
    /* Una función puede llamar a otras, o incluso a si misma.
    Las funciones que se llaman a si misma como parte de un cálculo
    se denominan *recursivas*, y es importante que tengan siempre un
    caso base, para evitar formar un "bucle infinito". 
    */
console.log('Recursividad');
let fib1 = function(n) {
    if(n <= 2) {return 1}
    return fib1(n-1) + fib1(n-2)
}


for (let i = 1; i < 10; i++) {
    console.log('FIB(', i, ') =', fib1(i));
}

//Programación Dinámica Top-Down con memorización
console.log('Programación Dinámica Top-Down con memorización');
var fib2 = function(n) {
    const map = new Map(); // creamos un mapa para guardar los valores

    const dp = (x) => {
        if (x <= 2) return 1;

        if (!map.has(x)) { // si NO hemos calculado el resultado
            map.set(x, dp(x-1) + dp(x-2)) // lo calculamos y guardamos el valor
        }
        return map.get(x);
        
    }
    
    return dp(n);
};

for (let i = 1; i < 10; i++) {
    console.log('FIB(', i, ') =', fib2(i));
}

//Programación Dinámica Bottom-Up
console.log('Programación Dinámica Bottom-Up');


const fib3 = function(n) {
    const sol = [0, 1]

    for(let i = 2; i<=n; i++){
        sol[i] = sol[i - 1] + sol[i - 2]
    }
    return sol[n]
}

for (let i = 1; i < 10; i++) {
    console.log('FIB(', i, ') =', fib3(i));
}

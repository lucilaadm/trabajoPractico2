/*
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/
let nombres = [];
let edades = [];

for (let i = 0; i < 3; i++) {
    let nombre = prompt(`Introduce el nombre ${i+1}:`);
    let edad = prompt(`Introduce la edad de ${nombre}:`);

    nombres.push(nombre);
    edades.push(parseInt(edad));
}

let mayorEdad = Math.max(...edades);
let indiceMayor = edades.indexOf(mayorEdad);
let nombreMayor = nombres[indiceMayor];

alert(`La persona de mayor edad es: ${nombreMayor}`);
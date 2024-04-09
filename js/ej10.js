/*
10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
Ejercicios con Math
*/
let filas = prompt("Indique un número de filas:");
let columnas = prompt("Indique un número de columnas:");

if (isNaN(filas) || filas === '' || isNaN(columnas) || columnas === '') 
    alert('Por favor, introduce un número válido');
    if else {

for (let i = 1; i <= filas; i++) {
    document.write(i + <br />);
}
}
else {
for (let j = 1; j <= columnas; j++) {
    document.write(j + <br />);
}
}
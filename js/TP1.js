/*  
1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
*/

alert ("un mensaje");


/*2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
*/

document.write ("Hello World<br>");


/*
3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
*/

document.write (3 + 5 + "<br>");

/*
4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
Ejemplo: 
input: Coder 
Output: Hola Coder
*/

let nombreUsuario = prompt ("Nombre de usuario")
document.write ("Hola " + nombreUsuario + "<br>")



/*
5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
*/

let primerNumero = parseInt (prompt ("Indique un número"))
let segundoNumero =  parseInt (prompt ("Indique un número")) 

document.write ("Se primer número fue " + primerNumero + "<br>" + "Su segundo número fue " + segundoNumero + "<br>" + "La suma de los números indicados es " +  (primerNumero + segundoNumero));

/*
5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
*/

let primerNumero = parseInt (prompt ("Indique un número"))
let segundoNumero =  parseInt (prompt ("Indique un número")) 

document.write ("Se primer número fue " + primerNumero + "<br>" + "Su segundo número fue " + segundoNumero + "<br>" + "La suma de los números indicados es " +  (primerNumero + segundoNumero));


/*
6.-Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3
Output: El 15 es el número más grande
*/



let numeroEj6A = parseInt (prompt ("Indique un número"))
let numeroEj6B =  parseInt (prompt ("Indique un número")) 

document.write ("Su primer número fue " + numeroEj6A + "<br>" + "Su segundo número fue " + numeroEj6B + "<br>");


if (numeroEj6A > numeroEj6B ) {
    document.write ("El numero mayor es " + numeroEj6A );
}
else {
document.write ("El numero mayor es " + numeroEj6B );
} 

/*
7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 
input: 15 , 3, 9
Output: El 15 es el número más grande
*/

let numeroEj7A = parseInt (prompt ("Indique un número"))
let numeroEj7B =  parseInt (prompt ("Indique un número")) 
let numeroEj7C =  parseInt (prompt ("Indique un número")) 

document.write ("Su primer número fue " + numeroEj7A + "<br>" + "Su segundo número fue " + numeroEj7B + "<br>" + "Su tercer número fue " + numeroEj7C + "<br>");


if (numeroEj7A > numeroEj7B && numeroEj7A > numeroEj7C) {
    document.write ("El numero mayor es " + numeroEj7A )
    } if (numeroEj7B > numeroEj7C && numeroEj7B > numeroEj7A){
    document.write ("El numero mayor es " + numeroEj7B )
    } else{
    document.write ("El numero mayor es " + numeroEj7C );
} 

/*
8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 
input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.
*/

let numeroEj8 = parseInt (prompt ("Indique un número"))

document.write ("Su  número fue " + numeroEj8 + "<br>");


if (numeroEj8 / 2 === 0) {
    document.write ("El numero es divisible por dos")
    } else {
    document.write ("El numero no es divisible")
} 


/*
10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 

input: 20
Output: El 20 es divisible por 2.
*/


let numeroEj10 = parseInt (prompt ("Indique un número"))

document.write ("Su  número fue " + numeroEj10 + "<br>");


if (numeroEj10 % 2 === 0 || numeroEj10 % 3 === 0 || numeroEj10 % 5 === 0 || numeroEj10 % 7 === 0) {
    document.write ("El numero es divisible por 2, 3, 5 o 7")
    } else {
    document.write ("El numero no es divisible")
} 


/*
11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210
Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.
*/

if (numeroEj11 % 2 === 0) {
    document.write ("El numero es divisible por 2")
    } else if (numeroEj11 % 3 === 0) {
        document.write ("El numero es divisible por 3")
        } else if (numeroEj11 % 5 === 0) {
        document.write ("El numero es divisible por 5")
     } else if (numeroEj11 % 7 === 0) {
        document.write ("El numero es divisible por 7")
    }
    else { 
    document.write ("El numero no es divisible por 2, 3, 5 o 7")}

    */
    
/*2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
  
  0-2: Muy deficiente
  3-4: Insuficiente
  5-6: Suficiente
  7: Bien
  8-9: Notable
  10: Sobresaliente
  
  Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
  
  Ejemplo:
  Input: 5
  Input: 50
  Input: hola10
  Output: Suficiente
  Output: Número erróneo
  Output: Introduce un número válido
  */
let notaEj2 = parseInt(
  prompt(
    "Indique su nota (ten en cuenta que puede ser de 0 a 10 la calificación):"
  )
);

if (isNaN(notaEj2)) {
  alert("No has ingresado un número");
}
if (notaEj2 >= 0 && notaEj2 <= 2) {
  alert("Tu calificación fue muy deficiente");
} else if (notaEj2 >= 3 && notaEj2 <= 4) {
  alert("Tu calificación fue muy insuficiente");
} else if (notaEj2 >= 5 && notaEj2 <= 6) {
  alert("Tu calificación fue muy suficiente");
} else if (notaEj2 === 7) {
  alert("Tu calificación fue muy bien");
} else if (notaEj2 >= 8 && notaEj2 <= 9) {
  alert("Tu calificación fue muy notable");
} else if (notaEj2 === 10) {
  alert("Tu calificación fue muy sobresaliente");
} else if (notaEj2 < 0 && notaEj2 > 10) {
  alert("La calificación ingresada no es valida");
} else {
  alert("La calificación ingresada no es valida");
}

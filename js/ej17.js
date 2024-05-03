/*
17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
Ejemplo:
Input: Hola mundo
Output: la vocal ‘o’ está en la posición 1
*/

let texto = prompt("Indique un texto");

let detectarVocal = texto.match(/[aeiou]/);

if (detectarVocal !== null) {
    let posicion = texto.indexOf(detectarVocal[0]);
    alert(`La vocal '${detectarVocal[0]}' está en la posición ${posicion}`);
} else {
    alert(`No se encontraron vocales en el texto.`);
}
/*
14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
*/
let texto = prompt("Indique un texto");
let textoGuiones = texto.replace(/./g, "$&-");

alert(`Su texto indicado con guiones en el medio es: ${textoGuiones}`);
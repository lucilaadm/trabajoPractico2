/*
14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
*/
let texto = prompt("Indique un texto");
let resultado = "";

for (let i = 0; i < texto.length; i++) {
    resultado += texto[i];
    if (i !== texto.length - 1) { 
        resultado += "-";
    }
}
console.log(`Su texto indicado con guiones en el medio es: ${resultado}`);
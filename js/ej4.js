/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/
/*
let sumaDeNumeros = 0;
while (true) {
  let numeros = prompt("Indique un número:");

  if (numeros === null || numeros === " ") {
    break;
  }

  let resultado = parseFloat(numeros);

  if (isNaN(resultado)) {
    alert(`Por favor indique un numeros valido, indicó: ${numeros}`);
    continue;
  }

  sumaDeNumeros += resultado;
}
alert("Sus números suman: " + sumaDeNumeros);
*/

// otra forma
let sumaNumero = " ";

do {
  let numero = prompt("Indique un numero");
  if (numero === null) {
    break;
  }
  else if (isNaN(numero)) {
    alert('Por favor indique un número');
  } 
  sumaNumero += numero;
} while (true);

console.log (`La suma de sus numeros da ${sumaNumero}`);


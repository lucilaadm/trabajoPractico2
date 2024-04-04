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

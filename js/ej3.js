/*
  3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
  Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
  */

  let chistes = " ";

do {
  let texto = prompt("Indique un chiste");
  if (texto === null) {
    break;
  }
  chistes += ` - ${texto}`;
  alert(`Su texto fue: ${texto}`);
} while (true);

console.log (`Sus textos fueron: ${chistes}`);

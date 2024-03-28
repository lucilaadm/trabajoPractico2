
  /*
  4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/




let numeros = " ";

do {
  let numero = parseInt (prompt("Indique un número"));
  if (numero === null) {
    break;
  }
  else if (numero === NaN) {
    alert(`Lo indicado no es un número: ${numero}`);
  }
  chistes += ` - ${numero}`;
  alert(`Su número indicado fue: ${numero}`);

} while (true);

console.log (`La suma de sus números fueron: ${numeros}`);

/*
else {
  alert(`Lo indicado no es un número: ${numero}`);
}*/
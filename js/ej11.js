/*
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
*/

let resultado1 = 0;
let resultado2 = 0;
let resultado3 = 0;

while (true) {
  let nombre1 = prompt("Indique el nombre del primer participante:");
  let edad1 = prompt("Indique la edad del mismo:");
  if (nombre1 === null || nombre1 === " " || edad1 === null ||  edad1 === " ") {
    break;
  }

  let resultado1 = parseFloat(edad1);

  if (isNaN(resultado1)) {
    alert(`Por favor indique un numeros valido, indicó: ${edad1}`);
    continue;
  }

  let nombre2 = prompt("Indique el nombre del segundo participante:");
  let edad2 = prompt("Indique la edad del mismo:");

  if (
    nombre2 === null ||
    nombre2 === " " ||
    edad2 === null ||
    edad2 === " ") {
    break;
  }

  let resultado2 = parseFloat(edad2);

if (isNaN(resultado2)) {
    alert(`Por favor indique un numeros valido, indicó: ${edad2}`);
    continue;
  }

  let nombre3 = prompt("Indique el nombre del tercer participante:");
  let edad3 = prompt("Indique la edad del mismo:");

  if (nombre3 === null ||
    nombre3 === " " ||
    edad3 === null ||
    edad3 === " "  ) {
    break;
  }

  let resultado3 = parseFloat(edad3);

 if (isNaN(resultado3)) {
    alert(`Por favor indique un numeros valido, indicó: ${edad3}`);
    continue;
  }

  if (edad1 > edad2 && edad1 > edad3) {
    alert(
      `Los nombres y edades indicadas fueron ${nombre1} con ${edad1} años, ${nombre2} con ${edad2} años y ${nombre3} con ${edad3} años. <br /> El mayor es ${nombre1} con ${edad1} años`
    );
  } else if (edad2 > edad1 && edad1 > edad3) {
    alert(
      `Los nombres y edades indicadas fueron ${nombre1} con ${edad1} años, ${nombre2} con ${edad2} años y ${nombre3} con ${edad3} años. <br /> El mayor es ${nombre2} con ${edad3} años`
    );
  } else {
    alert(
      `Los nombres y edades indicadas fueron ${nombre1} con ${edad1} años, ${nombre2} con ${edad2} años y ${nombre3} con ${edad3} años. El mayor es ${nombre3} con ${edad3} años`
    );
  }
}

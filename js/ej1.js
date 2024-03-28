/*
  1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
  */

let edadEj1 = parseInt(prompt("Indique su edad"));

if (edadEj1 >= 18 && edadEj1 < 100) {
  alert("Sos mayor de edad, puedes conducir");
} else if (edadEj1 > 0 && edadEj1 < 18) {
  alert("Sos menor de edad, no puedes conducir");
} else {
  alert("La edad ingresada no es valida");
}

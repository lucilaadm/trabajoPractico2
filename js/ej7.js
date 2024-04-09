/*
7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/
let numeros = prompt("Indique un número entre 1 y 50:");

if (isNaN(numeros) || numeros === '' || numeros < 1 || numeros > 50) 
    alert('Por favor, introduce un número válido entre 1 y 50.');
    else {

for (let i = numeros; i >= 1; i--) {
  for (let j = i; j >= 1; j--) {
    document.write(i);
  }
  document.write(<br />);
}
}
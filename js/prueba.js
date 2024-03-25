
let edadEj1 = parseInt (prompt ("Indique su edad"))

if (edadEj1 >= 18 && edadEj1 < 100) {
    alert ("Sos mayor de edad, puedes conducir")
} else if ( edadEj1 > 0  && edadEj1 < 18) {
        alert ("Sos menor de edad, no puedes conducir")
    }
    else  {
        alert ("La edad ingresada no es valida")
    }
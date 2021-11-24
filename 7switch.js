'use strict';

var edad = 18;
var texto = '';
// la variable que queremos evaluar en este caso edad
switch (edad) {
    // el caso que creemos puede suceder 
    case 17:
        texto='No tienes 18 años';
    break;

    case 18:
        texto='Eres mayor de edad';
    break;
    default:
        texto = ' Parece que no tienes edad';
        break;
}
console.log(texto);
'use strict';

// funciones anonimas callbacks son 

function sumar(n1,n2,multiplicar) {
    var suma=n1+n2;
    multiplicar(suma);
    return suma;
}

sumar(5,7,function(d){
    console.log('La suma es ' + d);
    console.log('La multiplicacion es ' + d * 2);
});

// tantas funciones como queramos seria continuar ingresando funciones como parametros





// otra explicacion

// var multiplicar = function(d){
//     console.log('La suma es ' + d);
//     console.log('La multiplicacion es ' + d * 2);
// }
// sumar(5,7,multiplicar);
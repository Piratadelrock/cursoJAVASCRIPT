'use strict';

// funciones anonimas flecha

function sumar(n1,n2,fun) {
    var suma=n1+n2;
    fun(suma);
    return suma;
}

sumar(5,7,d=>{
    console.log('La suma es ' + d);
    console.log('La multiplicacion es ' + d * 2);
});

// si lleva mas de un parametro si incluiremos los parentesis

// tantas funciones como queramos seria continuar ingresando funciones como parametros

'use strict';

// ambito de las variables, donde nace donde muere
var global= 'variable gloval';

function MostrarConsola(){
    var variable_funcion='variable dentro de la funcion';
    console.log(global);
    console.log(variable_funcion);

}

MostrarConsola();

// global si se imprime porque esta fuera del bloque y no se limita
// console.log(global);

// solo vive dentro del bloque de la funcion mostrarconsola daria error
// console.log(variable_funcion);


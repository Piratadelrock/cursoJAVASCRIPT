'use strict';

var personas = {
    edad: 20,
    altura:1.97,
    peso:70,
}

// nos fijamos en la consola y nos mostrara el objeto de una forma 

console.log(personas);

// los datos se muestran como json y para acceder a tales propiedades del objeto json debemos
// poner el objeto.propiedad
console.log(personas.altura);

// se puede crear un arreglo de objetos
// (array de objetos que contiene objetos y cada objeto tiene sus propiedades)

var coches =[
    {marca:'SEAT',color:'Rojo'},
    {marca:'BMW',color:'Negro'},

]
// asi mostrariamos el objeto json array 
console.log(coches);

// para acceder a cada objeto con sus propiedades 
console.log(coches[0].marca);
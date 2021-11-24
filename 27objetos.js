'use strict';
// anterior mente se usaba con json y tener que crear muchas personas es engorroso, imaginando que debemos recoger ciertos 
// registros de una tabla de productos, y si crearamos un json por cada producto se nos haria muy largo
var persona = {
    edad:15,
    altura:23,

}
console.log(personal.edad);

// poo

function Persona(edad,altura,peso) 
{
    // para poder acceder a las propiedades de este modelo
    this.edad = edad;
    this.altura = altura;
    this.peso = peso;
    // ya tenemos el modelo de una persona sin datos, puede tener funciones, funcionabilidad
    // funciones como girar subir bajar como los coches, en las personas puede tener 
    this.caminar = ()=>{
        console.log('esta persona esta caminando');
    }
    this.sentarse=()=>{
        console.log('la persona esta sentada');
    }
    // se mantiene el modelo pero no se tiene la persona en si, se debe instanciar el objeto
}

// ahora se crea la persona con sus valores
// teniendo el objeto instanciado se puede instanciar sus funciones 
    var Manuel = new Persona(32,2.00,97);
    var Lucia = new Persona(22,1.78,52);
   
    console.log(Manuel.caminar());
    console.log(Lucia.sentarse());
    
// la palabra this hace relacion al objeto en el que esta definida,
// para evitarnos escribir Persona, ese this se puede sustituir por persona.edad..

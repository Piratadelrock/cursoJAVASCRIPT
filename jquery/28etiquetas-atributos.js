'use strict';

$(document).ready(function(){
// selector de etiqueta

    var span = $('span');
    // atributo de css con jquery
    // inyecta la clase en la etiqueta, mas no esta creado el css
    span.css('border','1px solid blue');
    console.log(span.text());
    

// selectores de atributos 
    // van fuera para decir que todo ese es el selecctor en si
    // lo hacemos asi porque title puede tener muchos nombre
    // estamos diciendo de los atributos title dentro del dom seleccioneme el google
    var atributo = $('[title = "google"]');
    atributo.css('font-size','50px');
    console.log(atributo.text());
});


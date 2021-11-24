'use strict';

/*tomaremos el boton con querySelector es seleccionarnos lo que le pasemos, en este caso con #, 
tomando el id con # y no usaremos el document by id
el #div es el id del div */

// recojemos el boton y el div
var boton = document.querySelector('#boton');
var div = document.querySelector('#div');

// añadiremos la funcionalidad de un evento
// un escuchador de evento, lo que hace es esperar a que se reproduzca
// una vez reproducido se hara lo que se le pide 

// forma anonima
boton.addEventListener('click',function(){
    console.log('Has pulsado el boton');
    div.innerHTML = 'Has pulsado el boton';
});
// forma flecha
// boton.addEventListener('click', =>(){});


function pulsar(){
    div.innerHTML = 'Pulsando desde funcion';
};

function alerta(){
    alert('alerta desde div');
}


/*
eventos inline (cuando estan en las etiquetas)
onclick
oncontextmenu (cuando se hace el boton secundario del raton)
onmouseenter (boton central)
onmousedown (al pasar el menu del raton hacia abajo rueda hacia abajo)
ondblclick (doble clic)
onmouseleave (al levantar el raton una vez pulsado cuando se suelta la pulsacion)
onmouseover (cuando se pasa por abajo)
onmouseup (cuando se pasa por encima) 

cuando son en javascript no se usa el on
*/
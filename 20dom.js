'use strict';
// dentro del documento podemos modificar muchas cosas y ese arbol se llama dom que podemos modificar el contenido 
// al pulsar un boton o cualquier otra cosa que queramos modificar estamos tocando el dom
// modificar el contenido y css de la pagina al pasar raton etc
var div1= document.getElementById('div1');

// console.log(div1);
div1.innerHTML = 'Texto cambiado atravez de javascript';

div1.style.fontSize='25px';
var parrafo1 = document.getElementsByClassName('parrafo1');

// console.log(parrafo1);
parrafo1[1].innerHTML = 'texto cambiado';

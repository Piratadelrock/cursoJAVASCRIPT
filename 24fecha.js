'use strict';

// fechas

//progamacion orientada a objetos
var fecha = new Date();
var hora = fecha.getHours().toString();
var minutos = fecha.getMinutes().toString();
var segundos = fecha.getSeconds().toString();

// se debe parsear con toString(); para que no se sume como numeros

console.log(hora+':'+minutos+':'+segundos);

// un reloj funcionando dentro de un div, con id fecha dentro del div imprimir los datos 
// que se dan de la funcion

let tiempo = document.getElementById('fecha');

function actualizarHora(){
        var fecha = new Date();
        var hora = fecha.getHours();
        var minutos = fecha.getMinutes();
        var segundos = fecha.getSeconds();
        var ampm;
        
        if(hora >= 12){
            hora = hora-12;
            ampm = ' PM';
        }else{
            ampm=' AM';
        }
        if(hora == 0){
            hora = 12;
        }
        if(minutos<10){
            minutos = '0'+ minutos;
        }
        if(segundos<10){
            segundos='0'+segundos;
        }
        var hms = hora+':'+minutos+':'+segundos+ampm;

        tiempo.textContent = hms;
};


// se hace para que se actualice inmediatamente
actualizarHora();
window.addEventListener('load', ()=>{
    var intervalo = setInterval(actualizarHora,1000);
});



/*
innerHTML analiza el contenido como HTML, por lo que lleva más tiempo.
nodeValue usa texto directo, no analiza HTML y es más rápido.
textContent utiliza texto directo, no analiza HTML y es más rápido.
innerText Toma en consideración los estilos. No obtendrá texto oculto, por ejemplo.
*/ 
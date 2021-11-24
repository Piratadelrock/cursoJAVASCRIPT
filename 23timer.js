'use strict';

// load a que tiene que estar esperando el navegador es decir el window
// atravez de ecmascript 6 nos evitamos poner function, recibiendo uan callback, lo mismo que function(){}
window.addEventListener('load', ()=>{
    // igual el setInterval recibe uan callback, 
    var tiempo = setInterval(()=>{
        console.log('Este mensaje se muestra cada 3 segundos');
    }, 3000);
    // 3000ms son 3 segundos este seria el timeout
});

// crear un reloj o cuenta atras

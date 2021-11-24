'use strict';

// Almacenamiento local
// recoger ciertos datos que estan en la pagina web 
// dentro del navegador, se dice que mientras persista en el navegador
// si se cierra pues se pierde los datos

// comprobar soporte
if (typeof (Storage)) {
    console.log('Disponible');
}else{
    console.log('No disponible');
}

//inspeccionar del navegador, application, localstorage, key/value
localStorage.setItem('Clave','texto o valor de esta clave');
localStorage.setItem('Edad',17);

// si se maneja tipo json debe estar parseado tostring

var valor = localStorage.getItem('clave');
console.log(valor);

// funcion cuando se crea objeto json se pone corchete
var persona ={
    edad:35,
    nombre: 'Emmanuel',
};

// pasandole la variable persona guardaria la informacion, pero como no se esta 
// guardando texto plano sino un objeto debemos pasarlo a texto plano 
// con JSON.stringify lo que hace es pasarlo a string apirest de javascript de 6 en adelante 
//                      CLAVE , PARSEAR OBJETO PARA LOS VALORES DE LA CLAVE
localStorage.setItem('persona',JSON.stringify(persona));
// ejemplo: {"edad":35,"nombre","Emmanuel"}
// OBTENEMOS GET el item guardado en localstorage y lo parseamos 
var per= JSON.parse(localStorage.getItem('persona'));

console.log(per.nombre,per.edad);

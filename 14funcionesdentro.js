'use strict';

var n1= prompt('Dime una palabra','una');
var n2= prompt('Dime otra palabra','otra');


function MostrarConsola(n1,n2) {
    
    console.log(n1+' '+n2);

}
function EnDocumento(n1,n2) {
    
    document.write(n1+' '+n2);

}
function Mostrar(n1,n2,n3 = false) {
  
    if(n3==false){
        MostrarConsola(n1,n2);
    }else{
        EnDocumento(n1,n2);
    }

}

function MostrarOtraVez(n1,n2) {
    EnDocumento(n1,n2);
}
// pasandole el parametro n3 simplemente colocamos el parametro
Mostrar(n1,n2,true);

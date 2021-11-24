'use strict';

var n1= prompt('Dime una palabra','Hola');
var n2= prompt('Dime otra palabra','como estas');

// tutorial1
    // function Unirpalabras(n1,n2) {
    //     var palabrasUnidas = n1+' '+n2;    
    //     return palabrasUnidas;
    // }
    // una forma
    // alert(unirpalabras(n1,n2));

    // var resultado = Unirpalabras(n1,n2);

    // console.log(resultado);

// tutorial2
function Unirpalabras2(n1,n2, n3 = false) {
    // el parametro n3 es opcional y se puede pasar
    if(n3==false){
        console.log(n1 + ' ' + n2);
    }else{
        document.write(n1 + ' ' + n2);
    }

    var palabrasUnidas = n1+' '+n2;    
    return palabrasUnidas;
}
// pasandole el parametro n3 simplemente colocamos el parametro
Unirpalabras2(n1,n2,true);


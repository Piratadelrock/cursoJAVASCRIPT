'use strict';
// Parametros REST

// ...p permite introducir tantos parametros como queramos, javascript lo formateara como un array
function ListadoPaises(p1,p2, ...p) {
    console.log(p1);
    console.log(p2);
    console.log(p);
}



ListadoPaises('España','Inglaterra','Colombia','Canada');
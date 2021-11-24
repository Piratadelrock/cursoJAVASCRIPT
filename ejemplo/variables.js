
// var nombre = "pony";
// document.write("Mi nombre es: "+nombre+"<br>");


// saluda
function Saludar(){
    var saludo = "";
    var tiempo = new Date().getHours();
    var nombre =document.getElementById("nombre").value;
   
    if(tiempo < 12){
        saludo="buenos dias!"+nombre;
    }
    else if(tiempo < 18){
        saludo = "buenas tardes!";
    }else{
        saludo ="buenas noches!";
    }
    document.getElementById("saludo").innerHTML= saludo;
}

// loops
/*var i = 1;
while (i<=5){
    console.log("Iteracion while: "+i+"\n");
    i++;
}

*/
for(var i = 1; i<=5; i++){
    console.log("iteracion for: "+i+"\n");
}
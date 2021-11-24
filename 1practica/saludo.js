function saludar(){
    var saludar = "";
    var tiempo = new Date().getHours();
    if (tiempo<12) {
        saludar = "Buenos dias!";
        
    } else if (tiempo<18){
        saludar = "Buenos tardes!";
    }
    else {
        saludar = "Buenas noches!"; 
    }
    document.getElementById("saludo").innerHTML = saludar;
}
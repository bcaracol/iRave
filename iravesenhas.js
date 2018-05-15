function mostrarHoras() {
	var hoje = new Date();
   	var horas = hoje.getHours();
   	var minutos = hoje.getMinutes();
   	if (minutos < 10) {
    	minutos = "0" + minutos; // add zero in front of numbers < 10
   	} 
	document.getElementsByClassName('clock')[0].innerHTML = horas + ":" + minutos;
	setTimeout(mostrarHoras, 1000); 

}
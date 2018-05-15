/* GERAL */

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

function dragging(){
    function setDraggableConstraints() {
        x1 = $("#relogio").width()/2 + $(".janela").width()/2 - $(".mapa").width();
        y1 = $(".janela").height() - $(".mapa").height() + 3 + 210;
        x2 = $("#relogio").width()/2 - $(".janela").width()/2;
        y2 = $(".barra").height() + 3 + 210;
        var containment = [x1,y1,x2,y2];
        $( ".mapa" ).draggable({containment: containment});
        $( ".mapa" ).draggable( "option", "containment", containment );
    }
    
    wheelzoom(document.getElementById('map'), {maxZoom: 2.5});
    
    setInterval(setDraggableConstraints, 100);  
}

function undo() {
    window.history.back();
}

function undo2() {
    window.history.back();
    window.history.back();
}

function undo3() {
    window.history.back();
    window.history.back();
    window.history.back();
}

function undo4() {
    window.history.back();
    window.history.back();
    window.history.back();
    window.history.back();
}


function undo5() {
    window.history.back();
    window.history.back();
    window.history.back();
    window.history.back();
    window.history.back();
}

/* MAPA */

function startsostimer(starttempo) {
    if (localStorage.getItem('sostimer') == null) {
        localStorage.setItem('sostimer', starttempo);
        startsostimer(starttempo);
    }
    else {
        var tempo = localStorage.getItem('sostimer');
        if (parseInt(tempo, 10) < 10) {
            document.getElementsByClassName('sostimer')[0].innerHTML = "00:0" + tempo;
        }
        else {
            document.getElementsByClassName('sostimer')[0].innerHTML = "00:" + tempo;
        }
        var tempoInt = parseInt(tempo, 10);
        tempoInt = tempoInt - 1;
        localStorage.setItem('sostimer', JSON.stringify(tempoInt));
        if (tempoInt < 0) {
            localStorage.removeItem("sostimer");
            return;
        }
        setTimeout(function() { startsostimer(tempoInt); }, 1000);
    }
}

function continuesostimer() {
    if (localStorage.getItem('sostimer') == null) {
        return;
    }
    else {
        var tempo = localStorage.getItem('sostimer');
        var tempoInt = parseInt(tempo, 10);
        tempoInt = tempoInt - 1;
        localStorage.setItem('sostimer', JSON.stringify(tempoInt));
        if (tempoInt < 0) {
            localStorage.removeItem("sostimer");
            return;
        }
        setTimeout(function() { continuesostimer(tempoInt); }, 1000);
    }
}

function continuesostimer2() {
    if (localStorage.getItem('sostimer') == null) {
        return;
    }
    else {
        var tempo = localStorage.getItem('sostimer');
        if (parseInt(tempo, 10) < 10) {
            document.getElementsByClassName('sostimer')[0].innerHTML = "00:0" + tempo;
        }
        else {
            document.getElementsByClassName('sostimer')[0].innerHTML = "00:" + tempo;
        }
        var tempoInt = parseInt(tempo, 10);
        tempoInt = tempoInt - 1;
        localStorage.setItem('sostimer', JSON.stringify(tempoInt));
        if (tempoInt < 0) {
            localStorage.removeItem("sostimer");
            return;
        }
        setTimeout(function() { continuesostimer2(tempoInt); }, 1000);
    }
}

/* AMIGOS */

function acordeao() {
    var icons = {
      header: "fa fa-angle-right",
      activeHeader: "fa fa-angle-right fa-rotate-90"
    };
    $( "#accordion" ).accordion({
      collapsible: true,
      active: false,
      icons: icons
    });
}

function passarbreathe() {
    setTimeout(function() {window.location = "breathing.html";}, 3000);
}

function passarAddConf() {
    if (localStorage.getItem('add') == "JA") {
        setTimeout(function() {window.location = "amigosadicionarconfBC.html";}, 4000);
    }
    else if (localStorage.getItem('add') == "BC") {
        setTimeout(function() {window.location = "amigosadicionarconfTG.html";}, 4000);
    }
    else {
        setTimeout(function() {window.location = "amigosadicionarconfJA.html";}, 4000);
    }
}

function addAmigoVar() {
    if (localStorage.getItem('add') == "BC") {
        localStorage.setItem('add', "TG");
    }
    else if (localStorage.getItem('add') == "JA") {
        localStorage.setItem('add', "BC");
    }
    else {
    localStorage.setItem('add', "JA");
    }
}

function showAmigo() {
    if (localStorage.getItem('add') == "JA") {
        var x = document.getElementById("JA");
            x.style.display = "block";
    }
    else if (localStorage.getItem('add') == "BC") {
        var x = document.getElementById("JA");
            x.style.display = "block";
        var x = document.getElementById("BC");
            x.style.display = "block";
    }
    else if (localStorage.getItem('add') == "TG") {
        var x = document.getElementById("JA");
            x.style.display = "block";
        var x = document.getElementById("BC");
            x.style.display = "block";
        var x = document.getElementById("TG");
            x.style.display = "block";
    }
}

function addAmigoNao() {
    if (localStorage.getItem('add') == "TG") {
            location.href = 'amigosadicionarnao.html';
    }
    else {
    location.href = 'amigosadicionar.html';
    }
}

function changeScrAC() {
    if (localStorage.getItem('walked') == "sim") {
        document.getElementById("map").src = "ACNew.png";
    }
}

function changeScrDA() {
    if (localStorage.getItem('walked') == "sim") {
        document.getElementById("map").src = "DANew.png";
    }
}

function changeScrJA() {
    if (localStorage.getItem('walked') == "sim") {
        document.getElementById("map").src = "JANew.png";
    }
}

function changeScrTG() {
    if (localStorage.getItem('walked') == "sim") {
        document.getElementById("map").src = "TGNew.png";
    }
}

function changeScrMapa() {
    if (localStorage.getItem('walked') == "sim") {
        document.getElementById("map").src = "mapaNew.png";
    }
}

function walkTo() {
    if (localStorage.getItem('walked') == "sim") {
        document.getElementById("map").src = "BCNew.png";
    }
    else {
        setTimeout(function() {document.getElementById("map").src = "BCLine1.png";}, 1500);
        setTimeout(function() {document.getElementById("map").src = "BCLine2.png";}, 3000);
        setTimeout(function() {document.getElementById("map").src = "BCNew.png";}, 4000);
        localStorage.setItem('walked', "sim");
    }
}
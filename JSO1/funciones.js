function init() {
    //alert(document.getElementById("usuario").value);
    //var usu = prompt("Introduzca usuario"); usu: String;
    //document.getElementById("usuario").value = usu;
    var lista = document.getElementsByName("valores");
    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];
        alert(lista[i].value);
        
    }
}

function mostrarMensaje() {
    document.getElementById("texto").innerHTML = "<b>TEXTO</b>";
    document.getElementById("texto").style = "color: blue";
    document.getElementById("text").className = "borde";    
}

function ocultarCapa() {
    document.getElementById("principal").style = "display: none";
    
}

function mostrarCapa() {
    document.getElementById("principal").style = "display: visibility";
}

function mostrarAlerta() {
    alert('AVISO');
}




window.addEventListener("load",init,false);
var suma = 0;
var multi = 1;

function calcularSM(numero) {        
    if (numero != 0) {
        suma += eval(numero);
        multi *= numero;
        document.getElementById("numero").value = "";
        document.getElementById("numero").focus();
    } else {
        document.getElementById("resultadoSM").innerHTML = 
            "La suma es: " + suma + 
            "<br/>La multiplicación es: " + multi;
        suma = 0;
        multi = 1;
    }
}

function cambiarFondo() {
    var rojo = document.getElementById("rojo").value;
    var verde = document.getElementById("verde").value;
    var azul = document.getElementById("azul").value;

    document.getElementById("contenedor")
        .style.backgroundColor = "#" + rojo + verde + azul;
}

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function calcularNIF() {
    var dni = parseInt(document.getElementById("dni").value);

    if (dni < 0 || dni > 99999999) {
        document.getElementById("errorDNI").innerHTML = "Error: DNI incorrecto";
        document.getElementById("letra").value = "";
    } else {
        document.getElementById("errorDNI").innerHTML = "";
        var pos = dni%23;
        document.getElementById("letra").value = letras[pos];
    }
}
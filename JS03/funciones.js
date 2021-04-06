function calcularEdad() {
    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;

    var dias = edad * 365;

    document.getElementById("resultado").innerHTML = nombre 
            + " tiene " + edad + " años y en días son " + dias;
}

function calcularMayor() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    var mensaje = "";
    if (num1 > num2) {
        mensaje = num1 + " es mayor que " + num2;
    } else if (num2 > num1) {
        mensaje = num2 + " es mayor que " + num1;
    } else {
        mensaje = num1 + " es igual que " + num2;
    }
    document.getElementById("resultadoMayor").innerHTML = mensaje;
}

function mostrarFrase() {
    var frase = document.getElementById("frase").value;
    var num = document.getElementById("num").value;

    var texto = "";
    for (let i = 0; i < num; i++) {
        texto = texto + (i+1) + ". " + frase + "<br/>";
        
    }
    document.getElementById("resultadoFrase").innerHTML = texto;
}

function calcularPotencia() {
    var base = document.getElementById("base").value;
    var exponente = document.getElementById("exponente").value;

    var potencia = Math.pow(base,exponente);

    document.getElementById("potencia").innerHTML = base + "^" + exponente + "=" + potencia;
}

function calcularIMC() {
    var peso = document.getElementById("peso").value;
    var talla = document.getElementById("talla").value;

    var imc = peso / Math.pow(talla,2);
    var mensaje = "";
    if (imc < 18.5){
        mensaje = " Tienes un peso insuficiente "
    } else if (imc >= 18.5 && imc <= 24.9){
        mensaje = " Tiene normopeso "
    } else if (imc >= 25 && imc <= 26.9){
        mensaje = " Tiene sobrepeso grado 1"
    } else if (imc >= 27 && imc <= 29.9){
        mensaje = " Tienes preobesidad"
    } else if (imc >= 30 && imc <= 34.9){
        mensaje = " Tienes obesidad de tipo 1"
    } else if (imc >= 35 && imc <= 39.9){
        mensaje = " Tienes obesidad de tipo 2"
    } else if (imc >= 40 && imc <= 49.9){
        mensaje = " Tienes obesidad mórbida"
    } else {
        mensaje = " extrema"
    }
    
    document.getElementById("imc").innerHTML = "Tienes un peso de " + peso + "kg" + " y una altura de " + talla + "m " + "su imc será " + imc + mensaje;
}

var aleatorio = parseInt (Math.random() * 10);
var intentos = 3;
function adivinanza() {
    var numero = document.getElementById("numero").value;
    var mensaje = "";
    if ( numero == aleatorio){
        mensaje = "Genial has acertado el número"
    } else if ( numero > aleatorio){
        mensaje = "El número que buscas es menor"
        
    } else {
        mensaje = "El número que buscas es mayor"
    }

    document.getElementById("adivino").innerHTML = mensaje;
}
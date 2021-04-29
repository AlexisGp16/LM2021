var expresion = /\S+@\S+\.\S+/;
function validarFormulario() {
    var cadenaErrores = "";
    var email = document.getElementById("correo");
    
    if (email.value == null || email.value.length == 0 || !expresion.test(email)) {
        cadenaErrores = "<li>Error Email: Campo Vacío</li>";
    }

    var wb = document.getElementById("web");
    if (wb.value == null || wb.value.length == 0){
        cadenaErrores = cadenaErrores + "<li>Error Web: Campo Vacío<li>";
    }

    var edad = document.getElementById("edad");
    if (edad.value == null || edad.value.length == 0){
        cadenaErrores = cadenaErrores + "<li>Error Edad: Campo Vacío<li>";
    }

    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    if (pass1.value == null || pass1.value.length == 0){
        cadenaErrores = cadenaErrores + "<li> Error Contraseña: Campo vacío<li>";
    } else if (pass1.value != pass2.value) {
        cadenaErrores = cadenaErrores + "<li> Error Contraseña: Las contraseñas no coinciden<li>";
    }


    if (cadenaErrores.length == 0) {
        return true;
    } else {
        verErrores(cadenaErrores);
        return false;
    }
}

function verErrores(mensaje) {
    document.getElementById("errores").innerHTML = mensaje;
    document.getElementById("capaerrores").style.visibility = "visible";
}

function genera_borde(){
    var borde = document.getElementById("borde");
    borde.setAttribute('border', '1');
}

function quita_borde(){
    var borde = document.getElementById("borde");
    borde.setAttribute('border', '0');
}

var mayor = "";
var menor = "";
var positivo = "";
var negativo = "";
var resultado = "";
function calcular() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var num3 = document.getElementById("num3").value;
    var num4 = document.getElementById("num4").value;

    if (num1 > num2 && num1 > num3 && num1 > num4) {
        mayor = "El mayor numero es " + num1;
    } else if (num2 > num1 && num2 > num3 && num2 > num4) {
        mayor = "El mayor numero es " + num2;
    } else if (num3 > num2 && num3 > num1 && num3 > num4){
        mayor = "El mayor numero es " + num3;
    } else {
        mayor = "El mayor numero es " + num4
    }

    if (num1 < num2 && num1 < num3 && num1 < num4) {
        menor = "El menor numero es " + num1;
    } else if (num2 < num1 && num2 < num3 && num2 < num4) {
        menor = "El menor numero es " + num2;
    } else if (num3 < num2 && num3 < num1 && num3 < num4){
        menor = "El menor numero es " + num3;
    } else {
        menor = "El menor numero es " + num4;
    }

    var positivo = 0;
    if (Math.sign(num1) == Math.sign(num2)){
        positivo = eval(num1) + eval(num2);
    } else if (Math.sign(num1) == Math.sign(num3)){
        positivo = eval(num1) + eval(num3);
    } else if (Math.sign(num1) == Math.sign(num4)){
        positivo = eval(num1) + eval(num4);
    }   else if (Math.sign(num2) == Math.sign(num3)){
        positivo = eval(num2) + eval(num3);
    } else if (Math.sign(num2) == Math.sign(num4)){
        positivo = eval(num2) + eval(num4);
    } else {
        positivo = eval(num3) + eval(num4);
    }

    var negativo = 0;
    if (Math.sign(num1) == Math.sign(num2)){
        positivo = eval(num1) + eval(num2);
    } else if (Math.sign(num1) == Math.sign(num3)){
        positivo = eval(num1) + eval(num3);
    } else if (Math.sign(num1) == Math.sign(num4)){
        positivo = eval(num1) + eval(num4);
    }   else if (Math.sign(num2) == Math.sign(num3)){
        positivo = eval(num2) + eval(num3);
    } else if (Math.sign(num2) == Math.sign(num4)){
        positivo = eval(num2) + eval(num4);
    } else {
        positivo = eval(num3) + eval(num4);
    }

    resultado += mayor + "<br/>";
    resultado += menor + "<br/>";
    resultado += positivo + "<br/>";
    resultado += negativo + "<br/>";


    document.getElementById("resultadoTexto").innerHTML = resultado;
}
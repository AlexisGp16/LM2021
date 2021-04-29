function transformarTexto(texto) {
    var resultado = "";

    var textominuscula = texto.toLowerCase().split("");

    var a = 0, e = 0, i = 0, o = 0, u = 0, blanco = 0;

    for (let j = 0; j < textominuscula.length; j++) {
        if (textominuscula[j] == 'a') {
            a++;
        } else if (textominuscula[j] == 'e') {
            e++;
        } else if (textominuscula[j] == 'i') {
            i++;
        } else if (textominuscula[j] == 'o') {
            o++;
        } else if (textominuscula[j] == 'u') {
            u++;
        } else if (textominuscula[j] == ' ') {
            blanco++;
        } 
    }
    //resultado = resultado + "Hay " + a + " vocales 'a'<br/>";
    resultado += "Hay " + a + " vocales 'a'<br/>";
    resultado += "Hay " + e + " vocales 'e'<br/>";
    resultado += "Hay " + i + " vocales 'i'<br/>";
    resultado += "Hay " + o + " vocales 'o'<br/>";
    resultado += "Hay " + u + " vocales 'u'<br/>";
    resultado += "Total de vocales: " + eval(a+e+i+o+u) + "<br/>";
    resultado += "Total de espacios en blanco: " + blanco + "<br/>";
    resultado += "Total de caracteres escritos: " + textominuscula.length + "<br/>";
    resultado += "Texto original: <b>" + texto + "</b>";


    document.getElementById("resultadoTexto").innerHTML = resultado;
}

function muestra() {
    document.getElementById("adicional").className = "visible";    
    document.getElementById("enlace").className = "oculto";
    document.getElementById("enlaceR").className = "visible";
}

function reducir() {
    document.getElementById("adicional").className = "oculto";    
    document.getElementById("enlace").className = "visible";
    document.getElementById("enlaceR").className = "oculto";
}

function comprobarCadena(cadena) {
    if (cadena == cadena.toLowerCase()) {
        document.getElementById("resultadoCadena").innerHTML = "La cadena está en Minúscula"
    } else if (cadena == cadena.toUpperCase()) {
        document.getElementById("resultadoCadena").innerHTML = "La cadena está en Mayúscula"
    } else {
        document.getElementById("resultadoCadena").innerHTML = "La cadena está en Mayúscula y Minúscula"
    }
}
function validar(campo) {
    //var campo = document.getElementById("nombre");
    if (campo.value == null || campo.value.length == 0) {
        ///campo.style = "border-color: red";
        //campo.focus();
        //setTimeout("document.getElementById('nombre').focus();",1);        
        mostrarError(campo.id, "Error: Nombre vacío");        
    } else {
        //campo.style = "border-color: none";
        borrarError(campo.id);
    }
}

function mostrarError(id, mensaje) {
    document.getElementById("sp" + id).innerHTML = mensaje;
    setTimeout("document.getElementById('nombre').focus();",1);
}

function borrarError(id) {
    document.getElementById("sp" + id).innerHTML = "";
}

function mostrarEdad(campo) {
    document.getElementById("sp" + campo.id).innerHTML = campo.value;
}

function validarFormulario() {
    var cadenaErrores = "";

    var cp = document.getElementById("postal");
    if (cp.value == null || cp.value.length == 0) {
        cadenaErrores = "<li>Error Cód. Postal: Campo Vacío</li>";
    } else if (cp.value.length != 5) {
        cadenaErrores = cadenaErrores 
                            + "<li>Error Cód. Postal: 5 cifras</li>";
    } else if (isNaN(cp.value)) {
        cadenaErrores = cadenaErrores 
                            + "<li>Error Cód. Postal: No es número</li>";
    }

    var tel = document.getElementById("telefono");
    if (tel.value == null || tel.value.length == 0) {
        cadenaErrores = cadenaErrores 
                            + "<li>Error Teléfono: Campo Vacío</li>";
    } else if (tel.value.length != 9) {
        cadenaErrores = cadenaErrores 
                            + "<li>Error Teléfono: 9 cifras</li>";
    } else if (!tel.value.startsWith(9) && !tel.value.startsWith(6)) {
        cadenaErrores = cadenaErrores 
                            + "<li>Error Teléfono: 9 o 6 primera cifra</li>";
    }

    if (cadenaErrores.length == 0) {
        return true;
    } else {
        verErrores(cadenaErrores);
        return false;
    }

    Validad fecha
    var ano = document.getElementById("ano").value;
    var mes = document.getElementById("mes").value;
    var dia = document.getElementById("dia").value;

    valor = new Date(ano, mes, dia);

    if( !isNaN(valor) ) {
     return false;
    }

    Validar Dni
    valor = document.getElementById("campo").value;
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if( !(/^\d{8}[A-Z]$/.test(valor)) ) {
  return false;
    }

    if(valor.charAt(8) != letras[(valor.substring(0, 8))%23]) {
    return false;
    }

    

}

function verErrores(mensaje) {
    document.getElementById("errores").innerHTML = mensaje;
    document.getElementById("capaerrores").style.visibility = "visible";
}


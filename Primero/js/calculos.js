function operaciones(op)
{

    var ops = {
        sumar: function sumarNumeros(n1, n2) {
            return (parseInt(n1) + parseInt(n2));
        },

        restar: function restarNumeros(n1, n2) {
            return (parseInt(n1) - parseInt(n2));
        },
        
        multiplicar: function multiplicarNumeros(n1, n2) {
            return (parseInt(n1) * parseInt(n2));
        },

        dividir: function dividirNumeros(n1, n2) {
            return (parseInt(n1) / parseInt(n2));
        }


    };



    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    
    //Comprobamos si se ha introducido números en las cajas
    if (isNaN(parseFloat(document.getElementById('num1').value))) {
        document.getElementById('resultado').innerHTML="<span style='color: red;'>Por favor, escriba un número 1</span>";
        document.getElementById("num1").innerText = "0";
        document.getElementById("num1").focus();
        } else if (isNaN(parseFloat(document.getElementById('num2').value))) {
        document.getElementById('resultado').innerHTML="<span style='color: red;'>Por favor, escriba un número 2</span>";
        document.getElementById("num2").innerText = "0";
        document.getElementById("num2").focus();
    }
    else {
    //Si se han introducido los números en ámbas cajas, operamos:
        switch(op) {
            case 'sumar':
                var resultado = ops.sumar(num1, num2);
                document.getElementById('resultado').innerHTML="<span style='color: green;'>"+resultado+"</span>";
                break;
            case 'restar':
                var resultado = ops.restar(num1, num2);
                document.getElementById('resultado').innerHTML="<span style='color: green;'>"+resultado+"</span>";
                break;
            case 'multiplicar':
                var resultado = ops.multiplicar(num1, num2);
                document.getElementById('resultado').innerHTML="<span style='color: green;'>"+resultado+"</span>";
                break;
            case 'dividir':
                var resultado = ops.dividir(num1, num2);
                document.getElementById('resultado').innerHTML="<span style='color: green;'>"+resultado+"</span>";
                break;

        }
    }

}
//area triangle
function areati()  {
    var base = prompt ("Introduce la base")
    var altura = prompt ("Introduce la altura")
    var sum = (1/2)*base*altura
    alert("El área es "+sum+"")
    
    }
    //area circle
    function areac()  {
    var radius = prompt ("Introduce el radio")
    var pi = "3.14159"
    var sum = radius*radius*pi
    alert("El área es "+sum+"")
    
    }
    //area rectangle
    function arear()  {
    var length = prompt ("Introduce legth")
    var width = prompt ("Introduce width")
    var sum = width*length
    alert("El área es "+sum+"")
    
    }
    //area trapezoid
    function areata()  {
    var baseone = prompt ("Introduce base one")
    var basetwo = prompt ("Introduce base two")
    var altura = prompt ("Introduce altura")
    var sum = (1/2)*altura*(baseone+basetwo)
    alert("El área es "+sum+"")
    
    }
    //area rhombus
    function arearh()  {
    var onediag = prompt ("Introduce la primera diagonal")
    var twodiag = prompt ("Introduce la segunda diagonal")
    var sum = onediag*twodiag*(1/2)
    alert("El área es "+sum+"")
    
    }
    //area oval
    function areao()  {
    var length = prompt ("Introduce la longitud")
    var altura = prompt ("Introduce la altura")
    var pi = 3.14159
    var sum = (pi*length)/altura
    alert("El área es "+sum+"")
    
    }
    //volume rect prism
    function volumerp()  {
    var length = prompt ("Introduce length")
    var width = prompt ("Introduce width")
    var altura = prompt ("Introduce altura")
    var sum = length*width*altura
    alert("El volumen es "+sum+"")
    
    }
    
<title>Suma de valores en texbox</title>
<script> 
function suma(){ 
var vtemp=0 
vresult=0 
for (var i=1;i<5;i++){ // hace un bucle para calcular todos los valores
vtemp=eval("parseFloat(document.all.box"+i+".value)") 
if(!isNaN(vtemp)) vresult+=vtemp // si valor es número negativo, añadir
} 
document.all.result.value=vresult // cambia el último valor...Resultado uno
} 
</script>
<form>
  <p>Valor 1: <input name="box1" onchange="suma()" size="20"> Valor 2:
  <input name="box2" onchange="suma()" size="20"> <br>
  Valor 3: <input name="box3" onblur="suma()" size="20"> Valor 4:
  <input name="box4" onblur="suma()" size="20"><br>
  <br>
  Suma total:<input name="result" size="20"> </p>
</form>

http://javascripts.astalaweb.com/Cálculo%20II/1_Cálculo%20II.asp
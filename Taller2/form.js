function segundos()
{
  var algoS=document.getElementById("resultado");
  var  Bminutos=60; var Bhoras=3600;

  var horaActual = new Date();
  var ho =horaActual.getHours();
  var mi=horaActual.getMinutes();
  var se=horaActual.getSeconds();
  var SegunHoras= ho*Bhoras;
  var segunMinutos=mi*Bminutos;
  var converR=parseInt(segunMinutos) +parseInt(SegunHoras) +parseInt(se) ;


algoS.innerHTML="---"+ho+"/"+mi+"/"+se+"---Resultado---"+converR;
}


function RaizCuadrada()
{
  var dato=document.getElementById("resultado2");
  var men="Tiene qe ser un numero impar ";
  var nuemero=document.getElementById("raiz1").value;
  if(nuemero %2 ){
    var resultado = Math.sqrt(nuemero);
    dato.innerHTML=""+resultado.toFixed(2);
    
  }
  else{
    dato.innerHTML=""+men;
  }
  
    
}
function Cadena_de_Texto()
{
  var longitud=document.getElementById("resultado3");
var entrada=document.getElementById("cadenaTexto").value;
var cadena = new String(entrada);
longitud.innerHTML="Su longitud es:----"+cadena.length;



}
function Concatenar()
{
  
var Resultadosemana=document.getElementById("resultado4");
    var Dias_Laborables = new Array("Lunes","Martes","Miercoles","Jueves","Viernes"); 
    var Dias_Descanso = new Array("Sabado","Domingo");
    var Semana = Dias_Laborables.concat(Dias_Descanso); 
    
   
    Resultadosemana.innerHTML=`Salida:__${Semana}`;


}

function VersionNav()
{
  
  document.write("Versión del navegador: " + navigator.appVersion);
  
}
function mostrar_pantalla()
{
  var mostrar= document.getElementById("resultado6");
  mostrar.innerHTML="Esta es su anchura:...." + screen.width + " Esta es su altura:.. " + screen.height;
}
function Imprimir()
{
  if (window.print) {
    window.print();
  }
}

  function Area(){
    
  var areaResultado = document.getElementById("resultado1");
  var b = parseInt(document.getElementById("base").value);
var h = parseInt(document.getElementById("altura").value);

   var area = (b * h) / 2;

  areaResultado.innerHTML = "La area del rectangulo es: " + area;
  
  }

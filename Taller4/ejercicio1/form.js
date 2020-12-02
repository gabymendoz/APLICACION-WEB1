function conversor()
{
    
var num = document.getElementById("octal").value;
var resul= parseInt(num,8);
var veta=window.open("", "", "width=550,height=300, ,left=500, top=110" );
veta.document.write('<html >');
veta.document.write('<head>');
veta.document.write('<title>Document</title>');
veta.document.write('</head>');
veta.document.write('<body >');
veta.document.write('<div>');
veta.document.write('<h1 style=" display: flex; justify-content: center;">Resultado</h1>');
veta.document.write('<p id="mensage">'+resul+'</p>');
veta.document.write('<button  onclick=window.close()>Cerrar</button>');
veta.document.write('</div>');
veta.document.write('</body>');
veta.document.write('</html>'); 
}
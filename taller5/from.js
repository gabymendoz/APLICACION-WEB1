function mostrararray(){

    var  mesesaño= ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
 
    for ( i = 0 ; i < mesesaño.length ;i++) {
        document.getElementById("imprimir").innerHTML +=mesesaño[i]+'<br>';
        
            
    }
    
    };
    
    function productoNuevo()
    {
        function Producto_alimenticio(codigo, nombre, precio)
        {
            this.codigo= codigo;
            this.nombre=nombre;
            this.precio=precio;
        }
     var vcodigo = document.getElementById("codigo").value;
     var vnombre = document.getElementById("nombre").value;
     var vprecio = document.getElementById("precio").value;
     nuevoProducto = new Producto_alimenticio(vcodigo,vnombre,vprecio);
     guardar_yImprimir();
    };
     basePro=[];
    function guardar_yImprimir()
    {
    basePro.push(nuevoProducto);
   
    
    
    };
    function mostrar()
    {
        for ( i = 0 ; i < basePro.length ;i++) {
            document.getElementById("objetos").innerHTML +="codigo=  "+basePro[i].codigo+"<br>  Descriccion=   "+basePro[i].nombre+"<br>  Precio=   "+basePro[i].precio+'<br> <hr>';
           
                
        }
    };
    function Limpiar(){
        document.getElementById("objetos").innerHTML ="";
        document.getElementById("imprimir").innerHTML ="";
        
    };
    
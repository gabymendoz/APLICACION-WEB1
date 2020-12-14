function validar(){
    var numerocedula,apellidos,nombres,estadocivil,sexo,ciudad,direccion,telefono,correo;
    numerocedula=document.getElementById("numero de cedula ").value; 
    apellidos=document.getElementById("apellido").value; 
    nombres=document.getElementById("nombre").value; 
    estadocivil=document.getElementById("estado").value; 
    sexo=document.getElementById("sexo").value; 
    ciudad=document.getElementById("ciudad").value; 
    direccion=document.getElementById("Direccion").value; 
    telefono=document.getElementById("celular").value; 
    correo=document.getElementById("correo").value; 
 
    //validacion de todos los elementos
    if (numerocedula==="" || apellidos==="" || nombres==="" || estadocivil==="" || sexo==="" || ciudad==="" || direccion==="" || telefono==="" || correo==="")
    {
        alert("Todos los campos son obligatorios");
        return false;

    }

    //validacion de numero de cedula
    if(isNaN(numerocedula))
    {
        alert("El número de cédula debe ser numerico");
        return false;
    }

    //Validacion del telefono

    if(!(/^\d{10}$/.test(telefono)))
    {
        alert("El numero de telefono es incorrecto");
        return false;
    }
    
    //validacion del correo

    if(!(/\w+([-+.]\w+)*@\w+([-.]\w+)*/.test(correo)))
    {
        alert("El correo es incorrecto")
        return false;
    }
    return true;
    

}

function resultado() {
    var numero1 = parseInt(document.getElementById('nu1').value);
    var numero2 = parseInt(document.getElementById('nu2').value);
     var result;
    
     for (var i = 1; i<= 5; i++) {
         switch (i) {
             case 1:
                result = numero1 + numero2;
                alert("La suma es : "+ result ); 
                 break;
            case 2:
                result = numero1 - numero2;
                alert("La resta   es :  "+ result  ); 
                 break;
            case 3:

                result = numero1 * numero2;
                alert("La multiplicacion   es :  "+ result );    
                
                 break;      
              
            case 4:
                result = numero1 / numero2;
                aler("La division  es : " + result );  
               
                  break;
             default:
                alert("Tus numero son invalidos, ingresa de nuevo ");
                 break;
         }
         
     }



}
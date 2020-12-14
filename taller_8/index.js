
function myFunction() {
    var x = document.body.childNodes;
    var txt ="";
    var i;
    for(i=0; i < x.length; i++){
        txt=txt +x[i].nodeName 
        alert(txt);
    }
}
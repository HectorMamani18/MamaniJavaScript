function convertir() {
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
   let dolar =124.68;
   let euro = 131.92; 
    if(document.getElementById("uno").checked)
        {resultado = valore / dolar ;
alert("El Cambio de ARS a Dolar es:" + resultado.toFixed(2));
    }
    else if(document.getElementById("dos").checked)
       { resultado = valore / euro ;
        alert("El cambio de ARS a Euro es:" + resultado.toFixed(2))
    }

}



 


    
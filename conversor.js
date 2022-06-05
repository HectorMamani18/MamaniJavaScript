function convertir(){
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 2.10;
    var euro = 1.29;
    if (document.getElementById("uno").Checked){
         resultado = valore / dolar;
        alert("El cambio de pesos a Dolares es: $" + resultado.toFixed(2))
}
  if (document.getElementById("dos").Checked){
      resultado = valore / euro;
      alert("El cambio de pesos a Euros es: " + resultado.toFixed(2));
  } 
  else{
      alert("Tienes que completar los requerimientos")
  } 
}
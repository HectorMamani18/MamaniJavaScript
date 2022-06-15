
function calcular(parametro1,parametro2){
    console.log("Resultado:", (parametro1) / (parametro2));
}

function pesos(){
    let monto =  parseInt(prompt("Ingrese ARS a Convertir:"))
    calcular(monto,dolar)

}

function euros(){
    let cantidad = parseInt( prompt("Ingrese ARS a Convertir"))
    calcular(cantidad,euro)
}
 
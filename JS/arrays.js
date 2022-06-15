function agregarMoneda(){
    debugger
    let moneda = prompt("Ingrese Nueva Moneda:")
    let precio = prompt("Ingrese Valor de Nueva Moneda:")
    Moneda.push(new Monedas(moneda, precio))
}

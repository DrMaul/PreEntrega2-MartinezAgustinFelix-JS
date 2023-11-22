/**
OJITOS TURCOS

Ojitos Turcos es un emprendimiento que manejamos con mi novia, en el cual vendemos diversos productos artesanales
que nos ayudan y nos dan buenas energias.
Mi proyecto consistirá en poder hacer llegar a mayor escala todo el trabajo que venimos realizando apasionadamente.

 */

const stockProd = [
    {id: 1, nombre: "Pulsera", precio: 500},
    {id: 2, nombre: "Estatua de Buda", precio: 800},
    {id: 3, nombre: "Pack 8 Sahumerios", precio: 500},
    {id: 4, nombre: "Cascada de humo", precio: 1500},
    {id: 5, nombre: "Collar personalizado", precio: 300},
]

const carrito = []

let compraTotal = 0;


//Menú principal con el mensaje de bienvenida
function mensajeBienvenida() {

    alert("Bienvenido a Ojitos Turcos");
    menuCompra();

}


//Menú de compra con el listado de productos
function menuCompra() {


    let productoID = prompt(`A continuación, utilice el buscador para seleccionar un producto de la lista. Total en carrito: $${compraTotal.toFixed(2)}
    \n 1- Pulsera Ojo Turco
    \n 2- Estatua de Buda
    \n 3- Pack 8 Sahumerios
    \n 4- Cascada de humo
    \n 5- Collar personalizado
    \n 6- Ver Carrito
    \n 7- Salir`);

    const prodBuscado = stockProd.find (prod => prod.id.toString() === productoID)
    console.log(prodBuscado);
    
    if (prodBuscado){
        let opcion = prompt(`El precio de ${prodBuscado.nombre} es de $${prodBuscado.precio}. A continuación seleccione una opción para continuar:
        \n 1- Agregar al carrito
        \n 2- Volver
        \n 0- Salir`);

        switch (opcion) {
            case "1":
                agregarAlCarrito(prodBuscado);
                break;
            case "2":
                menuCompra();
                break;
            case "0":
                alert("Redirigiendo al menú");
                mensajeBienvenida();
                break;
            default:
                break;
            }  

    }
    else if (productoID === "6"){
        verCarrito();
    }
    else if (productoID === "7"){
        alert(`Redirigiendo al menú principal`);
    }
    else if (productoID === ""){
        alert("Opción inválida. Intente nuevamente");
    }
    else {
        alert("Opción inválida. Intente nuevamente");
    }
    


}

function agregarAlCarrito(prodBuscado) {

    carrito.push(prodBuscado);
    compraTotal += prodBuscado.precio;
    verCarrito();
} 

function verCarrito(){

    
    if (carrito.length < 1) {
        alert("Tu carrito está vacío")
        menuCompra();
    }

    const ultimoElementoAgregado = carrito[carrito.length - 1];

    const ticket = carrito.map(
        (producto) => `${producto.nombre} - $${producto.precio.toFixed(2)}`
      );

    const listadoCarrito =
    "Detalles de la compra:\n" +
    ticket
    .map((linea) => `   ${linea}`)
    .join("\n") +
    `\n\nTOTAL DE LA COMPRA: $${compraTotal.toFixed(2)}`;

    alert(listadoCarrito);
    

    let opcion = prompt(`Total en carrito: $${compraTotal.toFixed(2)}
            \n A continuación seleccione una opción para continuar:
            \n 1- Finalizar compra
            \n 2- Seguir comprando
            \n 3- Quitar
            \n 0- Salir`);

    switch (opcion) {
        case "1":
            alert(`Su compra de $${compraTotal.toFixed(2)} esta siendo procesada. Redirigiendo al formulario de pago.`);
            break;
        case "2":
            menuCompra();
            break;
        case "3":
            alert(`Se eliminará ${ultimoElementoAgregado.nombre} del carrito`);
            carrito.pop();
            compraTotal -= ultimoElementoAgregado.precio;
            menuCompra();
            break;
        case "0":
            alert(`Redirigiendo al menú principal`);
            mensajeBienvenida();
            break;
        default:
            alert("Opción inválida. Intente nuevamente");
            menuCompra();
            break;
    }   


}




mensajeBienvenida();
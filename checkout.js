let button = document.querySelector("#btn");


function mostrarProductos() {
    button.addEventListener("click", finalizarCompra);
}

function finalizarCompra() {

    let carrito = 
    
    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }
    
    
    let totalSinDescuento = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    let descuento = 0.1; // 10% de descuento
    let totalConDescuento = totalSinDescuento * (1 - descuento);
    

    let resumen = "=== RESUMEN DE COMPRA ===\n\n";
    resumen += "Productos:\n";
    carrito.forEach(item => {
        resumen += `- ${item.nombre} x${item.cantidad} = $${(item.precio * item.cantidad).toFixed(2)}\n`;
    });
    resumen += `\nSubtotal: $${totalSinDescuento.toFixed(2)}\n`;
    resumen += `Descuento (10%): -$${(totalSinDescuento * descuento).toFixed(2)}\n`;
    resumen += `Total final: $${totalConDescuento.toFixed(2)}\n\n`;
    resumen += "¡Gracias por su compra!";
    
    alert(resumen);
    
    
    alert("¡Compra finalizada exitosamente!\n\nGracias por elegirnos. Su pedido será procesado pronto.");
}
document.addEventListener("DOMContentLoaded", function() {
    const botonesAgregar = document.querySelectorAll(".agregar");
    const listaCarrito = document.getElementById("lista-carrito");
    const totalCarrito = document.getElementById("total");
    const botonVaciar = document.getElementById("vaciar-carrito");
    
    let carrito = [];

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", function() {
            const producto = this.parentElement;
            const nombre = producto.querySelector("h3").innerText;
            const precio = parseFloat(producto.querySelector(".precio").innerText.replace("$", ""));

            carrito.push({ nombre, precio });
            actualizarCarrito();
        });
    });

    botonVaciar.addEventListener("click", function() {
        carrito = [];
        actualizarCarrito();
    });
    function hacerPedido(pedido) {
        const telefono = 'NUMERO'; 
        const mensaje = "¡Hola! Me gustaría pedir una"; pedido;
    
        <a href="https://wa.me/NUMERO$text=Gracias%20por%20escanear%20el%20QR,%20tu%20descuento%20de%2020%%20está%20listo%20para%20tu%20pedido" target="_blank">
                        pedinos aca.
                    </a>
                    
    }

    function actualizarCarrito() {
        listaCarrito.innerHTML = "";
        let total = 0;

        carrito.forEach(item => {
            let li = document.createElement("li");
            li.innerText = $;{item.nombre} - $$;{item.precio.toFixed(2)};
            listaCarrito.appendChild(li);
            total += item.precio;
        });

        totalCarrito.innerText = Total; $$;{total.toFixed(2)};
    }
});
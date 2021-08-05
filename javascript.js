
let precioVenta = 0;
let precioFinal = 0;


class Producto{
    constructor (nombre, precioneto){
        this.nombre = nombre.toUpperCase();
        this.precioneto = precioneto;
        this.preciofinal = precioneto * 1.21;
        this.vendido = false;
    }

    agregarGanancia (){
        return this.preciofinal * 1.2;
    }
    


}

const listaProductos = [];

const producto1 = new Producto (prompt("Ingresar nombre del producto:"), parseFloat (prompt ("Ingrese su precio")));

listaProductos.push (producto1);

const producto2 = new Producto (prompt("Ingresar nombre del producto:"), parseFloat (prompt ("Ingrese su precio")));

listaProductos.push (producto2);




let listaOrdenada = listaProductos.sort(function(a,b){
    if(a.preciofinal > b.preciofinal){
        return 1;
    }
    if(a.preciofinal < b.preciofinal){
        return -1;
    }

    
    return 0;
    
});

console.log(listaOrdenada);

for (var producto of listaProductos){
    const listaProductos = document.getElementById("listaDeProductos");
    const contenedor = document.createElement ("div");

    contenedor.innerHTML = `
            <div class = "card text-center mb-4">
                <div class = "card-body">
                    Producto: ${producto.nombre}<br>
                    Precio neto: ${producto.precioneto}<br>
                    Precio con IVA: ${producto.preciofinal}<br>
                    Precio final: $${producto.agregarGanancia()} <br>

                </div>
            </div>

   
        `

    listaProductos.appendChild(contenedor);
}

/* 
console.log("Nombre del Producto: "+producto.nombre);
console.log("Precio neto: "+producto.precioneto);
console.log("Precio NETO con IVA: "+producto.preciofinal);
console.log("Precio FINAL al consumidor: "+producto.agregarGanancia());
 */
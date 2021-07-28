
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

const producto3 = new Producto (prompt("Ingresar nombre del producto:"), parseFloat (prompt ("Ingrese su precio")));

listaProductos.push (producto3);

for (var producto of listaProductos){
    console.log("Nombre del Producto: "+producto.nombre);
    console.log("Precio neto: "+producto.precioneto);
    console.log("Precio NETO con IVA: "+producto.preciofinal);
    console.log("Precio FINAL al consumidor: "+producto.agregarGanancia());

}

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
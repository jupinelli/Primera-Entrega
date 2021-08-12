
let precioVenta = 0;
let precioFinal = 0;
let precioNeto = document.getElementById('precioNeto');
let nombreProducto = document.getElementById('nombreProducto');
let btnCalcular = document.getElementById('btnCalcular');
let lista = document.getElementById("listaDeProductos");
let nombreCliente = sessionStorage.setItem('nombreCliente', prompt('Ingrese su nombre'));
let saludoInicial = document.getElementById('saludo');
let tituloProductos = document.getElementById('tituloProductos');

saludoInicial.innerHTML = 'Hola '+ sessionStorage.getItem('nombreCliente').toLocaleUpperCase()+', bienvenidx a nuestra tienda!';

tituloProductos.innerHTML = sessionStorage.getItem('nombreCliente')+', podes ingresar aqui los productos: ';


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

let listaOrdenada = () => {
    listaProductos.sort(function(a,b){
        if(a.preciofinal > b.preciofinal){
            return 1;
        }
        if(a.preciofinal < b.preciofinal){
            return -1;
        }
    
        
        return 0;
        
    });
} 



const listaProductos = [];

btnCalcular.addEventListener('click', function(){
    lista.innerHTML = '';
    const producto1 = new Producto (nombreProducto.value, precioNeto.value);

    listaProductos.push (producto1);
    nombreProducto.value = '';
    precioNeto.value = '';

    console.log(listaProductos);

    listaOrdenada ();
    agregar ();
    console.log(contenedor);
}
)


const agregar = () => {
for (var producto of listaProductos){
    
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

    lista.appendChild(contenedor);

 
}
}
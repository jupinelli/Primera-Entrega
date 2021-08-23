const productList = [
    {
        id: 1,
        nombre: 'Almendras',
        precio: 100,
        imagen: 'almendras.jpg'
    },
    {
        id: 2,
        nombre: 'Nueces',
        precio: 80,
        imagen: 'nueces.jpg'
    },
    {
        id: 3,
        nombre: 'Pistachos',
        precio: 150,
        imagen: 'pistachos.jpg'
    },
    {
        id: 4,
        nombre: 'Avellanas',
        precio: 160,
        imagen: 'avellanas.jpg'
    },

    {
        id: 5,
        nombre: 'Granola',
        precio: 145,
        imagen: 'granola.jpg'
    }

];


for (const product of productList){
$("#listaDeProductos").append(`
    <div class="container w-25 mb-4 justify-content-center">
        <div class ="card text-center">
            <div><h3> ID: ${product.id} - ${product.nombre}</h3></div>
            <img src="images/${product.imagen}" class="card-img-top" alt="nueces">
            <div><h5> Precio cada 100g: $${product.precio}</h5></div>
            <button id="btn${product.id}" type= "button">Comprar</button>
        </div>
    </div>

`)

$(`#btn${product.id}`).on('click',function(){
    console.log(`compraste ${product.nombre}`)
})

};


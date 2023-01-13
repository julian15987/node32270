const ProductManager = require('./ProductManager.js')


// Se creará una instancia de la clase “ProductManager”
const productManager = new ProductManager();

// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
console.log(productManager.getProducts());

/*
Se llamará al método “addProduct” con los campos:
- title: “producto prueba”
- description:”Este es un producto prueba”
- price:200,
- thumbnail:”Sin imagen”
- code:”abc123”,
- stock:25
*/

const new_product = productManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);

// El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE

console.log(new_product)
console.log('Id: ' + new_product.getId())

// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
console.log(productManager.getProducts());

// Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.
try{
    const error_product = productManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25);
}catch(e){
    console.log(e.message)
}

// Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo
const find_product = productManager.getProductById(new_product.getId());
const not_find_product = productManager.getProductById('123');

console.log('Producto encontrado: ' + find_product.title)
console.log('Producto NO encontrado: ' + not_find_product)

const Product = require('./Product.js')

class ProductManager {
    #products
    constructor(){
        this.#products = [];
    }

    getProducts = () => {
        return this.#products;
    };

    getProductById = (product_id) => {
        return this.#products.find(product => product.getId() === product_id);
    }

    getProductByCode = (product_code) => {
        return this.#products.find(product => product.code === product_code);
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const product = new Product(title, description, price, thumbnail, code, stock);

        if (!this.getProductByCode(code)){
            this.#products.push(product);
            return product;
        }

        throw new Error ('Product already exists');
    }

}

module.exports = ProductManager;
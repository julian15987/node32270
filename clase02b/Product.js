const uuidv4 = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

class Product {

    #id
    constructor(title, description, price, thumbnail, code, stock){
        this.#id = uuidv4();
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock
    }

    getId = () => {
        return this.#id
    }
}

module.exports = Product;
const uuidv4 = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

class Event {
    #id
    constructor(nombre, lugar, precio, capacidad, fecha) {
        this.#id = uuidv4();
        this.nombre = nombre;
        this.lugar = lugar;
        this.precio = precio;
        this.capacidad = capacidad;
        this.fecha = fecha;
        this.participantes = [];
    };

    addUser = (user_id) => {
        this.participantes.push(user_id);
    }

    isUserExists = (user_id) => {
        return this.participantes.find(user => user === user_id);
    }

    getId = () => {
        return this.#id;
    }
}

module.exports = Event;
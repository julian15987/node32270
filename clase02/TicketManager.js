const Event = require('./Event.js')

class TicketManager {
    #precioBaseDeGanancia = 0.15;
    #events
    constructor() {
      this.#events = [];
      this.users = [];
    }

    getEventos = () => {
        return this.#events;
    };

    agregarEvento = (nombre, lugar, precio, capacidad = 50, fecha = new Date()) => {
        const new_event = new Event(nombre, lugar, precio + this.#precioBaseDeGanancia, capacidad, fecha);
        
        this.#events.push(new_event);

        return new_event;
    };

    agregarUsuario = (event_uuid, user_id) => {
        
      const event_index = this.#events.findIndex(e => e.getId() === event_uuid);

      if (event_index >= 0) {
        if (!this.#events[event_index].isUserExists(user_id)){
          this.#events[event_index].addUser(user_id);

          return
        }
        
        throw Error ('El usuario ya fue ingresado al evento');

      }

      throw Error('El evento no existe');
    };

    ponerEventoEnGira = (event_uuid, nueva_localidad, nueva_fecha) => {
      const event_index = this.#events.findIndex(e => e.getId() === event_uuid);

      if (event_index >= 0) {
        const new_event = this.#events[event_index];
        new_event.lugar = nueva_localidad;
        new_event.fecha = nueva_fecha;

        this.#events.push(new_event);

      }

      throw Error('El evento no existe');

    };

  }

  module.exports = TicketManager;
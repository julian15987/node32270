const TicketManager = require('./TicketManager.js')

const ticketManager = new TicketManager();

const evento = ticketManager.agregarEvento('Prueba', 'lugar', 100, 10);

ticketManager.agregarUsuario(evento.getId(), 10 )

try{
    ticketManager.agregarUsuario(evento.getId(), 10 )
}catch(e){
    console.log(e);
}
console.log(ticketManager.getEventos());


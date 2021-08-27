
//bien entonces vamos a comenzar con la parte del controlador de mi socket

const socketController = (socket) => {
    //vamos a comenzar
    console.log('Cliente conectado');


    //vamos a escuchar lo que nos mande el cliente
    socket.on('send-ubicacion', (payload) => {
        const latitud  = payload.latitud;
        const longitud = payload.longitud;
        console.log('cambio ubicacion => ', latitud, ',',longitud);
    });

};

module.exports = {
    socketController
}

//ahora tenemos que conectar nuestra aplicacion de flutter


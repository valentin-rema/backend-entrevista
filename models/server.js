const express = require('express');

require('dotenv').config();

const { socketController } = require('../socket/socket-controller')


class Server{

    constructor(){
        this.app = express();
        
        this.server = require('http').createServer(this.app);

        this.io = require('socket.io')(this.server);

        this.middlewares();

        this.socket();
    }
    middlewares(){
        this.app.use(express.static('public'));
    }

    socket(){
        this.io.on('connection', socketController);
    }

    listen(){
        this.server.listen(process.env.PORT, () => {
            console.log('Servidor corriendo en el puerto', process.env.PORT);
        });
    }
}

module.exports = Server;
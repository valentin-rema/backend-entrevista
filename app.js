//entonces sin mas vamos a comenzar a construir nuestro servidor

const Server = require('./models/server');

//entonces ahora vamos a comenzar
const miServidor = new Server();

miServidor.listen();

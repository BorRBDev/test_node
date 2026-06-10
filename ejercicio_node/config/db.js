const mongoose = require('mongoose');

async function conectarDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Conectado a BBDD");

    }catch(e){
    console.error(e);
    }
}

module.exports = conectarDB;
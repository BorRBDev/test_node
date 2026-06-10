require('dotenv').config();
const conectarDB = require('./config/db');
const app = require('./main');

conectarDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor levantado en " + PORT));
const express = require('express');
const swaggerSchema = require('./docs/swagger');
const swaggerUi = require('swagger-ui-express');


const app = express();
app.use(express.json());



//FUNCION LOGGER
function logger(req, res, next) {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
}
app.use(logger);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSchema));
// NUESTROS ENDPONTS VAN AQUÍ
app.use('/admin', require('./routes/admin_route'));
app.use('/teacher', require('./routes/teacher_route'));
app.use('/auth', require('./routes/auth_route'));

// 5. 404 (penúltimo)
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

// 6. error handler (último, 4 parámetros)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Error interno del servidor'
  });
});

module.exports = app;
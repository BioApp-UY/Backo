const routes = require('express').Router();
const apiUsuarios = require('./users');



routes.use('/api/users', apiUsuarios);

routes.get('/', (req, res) => {
  res.status(200).send("BioApp 🌱");
});

routes.get('*', (req, res) => {
  res.status(404).json({
    error: true,
    mensaje: "RUTA_NO_ENCONTRADA"
           });
});




module.exports = routes
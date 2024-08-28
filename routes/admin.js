// Rutas de administrador

// Rutas "públicas" de la app
const express = require('express');
const router = express.Router();

//Importar todos los controladores de controllers/admin.js

//Crear primer endpoint de administrador que es el que nos permite mostrar un formulario para añadir un nuevo apartamento
const adminControllers = require('../controllers/admin.js');

router.get('/apartment/new-apartment', adminControllers.getNewApartmentForm)
router.post('/apartment/new-apartment', adminControllers.postNewApartment)

//Exportar estas rutas para que sean usadas en app.js
module.exports = router;
const pagoCtrl = require('../controllers/pago.controller');

//instanciar controlador de rutas
const express = require('express');
const router = express.Router();

//definicion de las rutas
//router.get('/', pagoCtrl.);
router.post('/', pagoCtrl.addPago);

module.exports = router;
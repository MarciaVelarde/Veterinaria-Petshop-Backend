const ventaCtrl = require('../controllers/venta.controller');

//instanciar controlador de rutas
const express = require('express');
const router = express.Router();

//definicion de las rutas
router.get('/', ventaCtrl.getVentas);
router.post('/', ventaCtrl.addVenta);

module.exports = router;
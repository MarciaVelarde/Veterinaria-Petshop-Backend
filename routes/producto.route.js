const productoCtrl = require('../controllers/producto.controller');

//instanciar controlador de rutas
const express = require('express');
const router = express.Router();

//definicion de las rutas
router.get('/:id', productoCtrl.getProducto);
router.get('/', productoCtrl.getProductos);
router.post('/', productoCtrl.addProducto);
router.delete('/:id', productoCtrl.deleteProducto);
router.put('/:id', productoCtrl.editProducto);
//router.get('/:categoriaPasajero', productoCtrl.getPasajesByCategoriaPasajero);

module.exports = router;
const productoCtrl = require('../controllers/producto.controller');

//instanciar controlador de rutas
const express = require('express');
const router = express.Router();

//definicion de las rutas
router.get('/:id', productoCtrl.getProducto);
router.get('/', productoCtrl.getProductos);
router.get('/validar/:codigo', productoCtrl.getProductoByCodigo);
router.post('/', productoCtrl.addProducto);
router.delete('/:id', productoCtrl.deleteProducto);
router.put('/:id', productoCtrl.editProducto);

module.exports = router;
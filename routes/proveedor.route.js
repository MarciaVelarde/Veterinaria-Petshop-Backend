const proveedorCtrl = require('../controllers/proveedor.controller');

//instanciar controlador de rutas
const express = require('express');
const router = express.Router();

//definicion de las rutas
router.get('/:id', proveedorCtrl.getProveedor);
router.get('/', proveedorCtrl.getProveedores);
router.post('/', proveedorCtrl.addProveedor);
router.delete('/:id', proveedorCtrl.deleteProveedor);
router.put('/:id', proveedorCtrl.editProveedor);

module.exports = router;
const categoriaCtrl = require('../controllers/categoria.controller');

//instanciar controlador de rutas
const express = require('express');
const router = express.Router();

//definicion de las rutas
router.get('/:id', categoriaCtrl.getCategoria);
router.get('/', categoriaCtrl.getCategorias);
router.post('/', categoriaCtrl.addCategoria);
router.delete('/:id', categoriaCtrl.deleteCategoria);
router.put('/:id', categoriaCtrl.editCategoria);
router.get('/:tipoMascota/:tipoProducto', categoriaCtrl.getCategoriaByTipos);

module.exports = router;
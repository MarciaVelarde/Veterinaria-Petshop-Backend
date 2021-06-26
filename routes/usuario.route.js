const usuarioCtrl = require('../controllers/usuario.controller');

//instanciar controlador de rutas
const express = require('express');
const router = express.Router();

//definicion de las rutas
router.get('/', usuarioCtrl.getUsuarios);
router.post('/', usuarioCtrl.addUsuario);
router.put('/:id', usuarioCtrl.updateUsuario);
router.post('/login', usuarioCtrl.loginUsuario);


module.exports = router;
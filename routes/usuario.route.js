const usuarioCtrl = require('../controllers/usuario.controller');

//instanciar controlador de rutas
const express = require('express');
const router = express.Router();

//definicion de las rutas
router.get('/', usuarioCtrl.getUsuarios);
router.get('/:id', usuarioCtrl.getUsuario);
router.get('/validar/:username', usuarioCtrl.getUsuarioByUsername);
router.post('/', usuarioCtrl.addUsuario);
router.put('/:id', usuarioCtrl.updateUsuario);
router.post('/login', usuarioCtrl.loginUsuario);
router.delete('/:id', usuarioCtrl.deleteUsuario);


module.exports = router;
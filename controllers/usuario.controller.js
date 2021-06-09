const Usuario = require('../models/usuario');

const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res) => {
    let usuarios = await Usuario.find().populate('ventas');
    res.json(usuarios);
}

usuarioCtrl.addUsuario = async (req, res) => {
    let usuario = new Usuario(req.body);
    try {
        await usuario.save();
        res.json({
            'status': '1',
            'msg': 'Usuario guardado'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operación'
        })
    }
}

usuarioCtrl.updateUsuario = async (req, res) => {
    console.log(req.body)
    let usuario = new Usuario(req.body);
    //console.log(usuario.ventas)
    //usuario.ventas.push(req.body._idVenta);
    console.log(usuario)


    try {
        await Usuario.updateOne({ _id: req.body._id }, usuario);
        res.json({
            'status': '1',
            'msg': 'Usuario guardado'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operación: ' + error
        })
    }
}

module.exports = usuarioCtrl;
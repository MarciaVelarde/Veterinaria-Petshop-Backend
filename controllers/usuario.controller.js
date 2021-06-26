const Usuario = require('../models/usuario');

const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res) => {
    let usuarios = await Usuario.find();
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

usuarioCtrl.loginUsuario = async (req, res) => {
    //en req.body se espera que vengan las credenciales de login
    //defino los criterios de busqueda en base al username y password recibidos
    const criteria = {
        username: req.body.username,
        password: req.body.password
    }
    //el método findOne retorna un objeto que cumpla con los criterios de busqueda
    Usuario.findOne(criteria, function (err, user) {
        //el método findOne retorna un objeto que cumpla con los criterios de busqueda
        if (err) {
            res.json({
                status: 0,
                msg: 'error'
            })
        };
        if (!user) {
            res.json({
                status: 0,
                msg: "not found"
            })
        } else {
            res.json({
                status: 1,
                msg: "success",
                username: user.username,
                rol: user.tipoUsuario,
                id: user._id
            });
        }
    })
}



module.exports = usuarioCtrl;
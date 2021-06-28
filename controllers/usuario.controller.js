const Usuario = require('../models/usuario');

const usuarioCtrl = {};

usuarioCtrl.getUsuarios = async (req, res) => {
    let criterios = {};
    if(req.query.nombre != '')
        criterios.nombre = { $regex: req.query.nombre, $options: "i" }
    if(req.query.apellido != '')
        criterios.apellido = { $regex: req.query.apellido, $options: "i" }
    if(req.query.tipoUsuario != '')
        criterios.tipoUsuario = { $regex: req.query.tipoUsuario, $options: "i" }
    let usuarios = await Usuario.find(criterios);
    res.json(usuarios);
}

usuarioCtrl.getUsuario= async (req, res) => {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
  };

usuarioCtrl.getUsuarioByRol = async (req, res) => {
    const usuario = await Usuario.findOne({ tipoUsuario: req.params.tipoUsuario });
    res.json(usuario);
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
    let usuario = new Usuario(req.body);
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

usuarioCtrl.deleteUsuario = async (req, res) => {
    try {
      await Usuario.deleteOne({ _id: req.params.id });
      res.json({
        status: "1",
        msg: "Usuario eliminado",
      });
    } catch (error) {
      res.json({
        status: "0",
        msg: "Error no se pudo eliminar el usuario",
      });
    }
  };

usuarioCtrl.getUsuarioByUsername = async (req, res) => {
    const usuario = await Usuario.findOne({ username: req.params.username });
    res.json(usuario);
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
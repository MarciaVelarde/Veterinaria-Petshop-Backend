const Venta = require('../models/venta');

const ventaCtrl = {};


ventaCtrl.getVentas = async (req, res) => {
    let venta = await Venta.find().populate("usuario");
    res.json(venta);
}

ventaCtrl.addVenta = async (req, res) => {
    let venta = new Venta(req.body);
    try {
        await venta.save();
        res.json({
            'status': '1',
            'msg': 'Venta guardada'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operación: ' + error
        })
    }
}

module.exports = ventaCtrl;
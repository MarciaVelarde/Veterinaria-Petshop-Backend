const Pago = require('../models/pago');

const pagoCtrl = {};

/*
pagoCtrl.getPago = async (req, res) => {
    let pago = await Pago.find();
    res.json(pago);
}
*/

pagoCtrl.addPago = async (req, res) => {
    let pago = new Pago(req.body);
    try {
        await pago.save();
        res.json({
            'status': '1',
            'msg': 'Pago guardado'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando la operación'
        })
    }
}

module.exports = pagoCtrl;
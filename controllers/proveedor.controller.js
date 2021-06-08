const Proveedor = require('../models/proveedor');
const proveedorCtrl = {}

proveedorCtrl.getProveedores = async (req, res) => {
    var proveedores = await Proveedor.find();
    res.json(proveedores);
}

proveedorCtrl.addProveedor = async (req, res) => {
    var proveedor = new Proveedor(req.body);
    try {
        await proveedor.save();
        res.json({
            'status': '1',
            'msg': 'Proveedor guardada.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

proveedorCtrl.getProveedor = async (req, res) => {
    const proveedor = await Proveedor.findById(req.params.id);
    res.json(proveedor);
}

proveedorCtrl.editProveedor = async (req, res) => {
    const vproveedor = new Proveedor(req.body);
    try {
        await Noticia.updateOne({_id: req.body._id}, vproveedor);
        res.json({
            'status': '1',
            'msg': 'Proveedor updated'
        })
    } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
    }
}

proveedorCtrl.deleteProveedor = async (req, res)=>{
 try {
    await Proveedor.deleteOne({_id: req.params.id});
    res.json({
        status: '1',
        msg: 'Proveedor removed'
 })
 } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
 }
}

module.exports = proveedorCtrl;
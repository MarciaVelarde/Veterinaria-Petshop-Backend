const Proveedor = require('../models/proveedor');
const proveedorCtrl = {}

proveedorCtrl.getProveedores = async (req, res) => {
  //console.log(req.body);
  //console.log(req.query);
  let criterios = {};

  if(req.query.nombre != '') //búsqueda por patrones de nombre de producto
    criterios.nombre = { $regex: req.query.nombre, $options: "i" }

  //if(req.body.categoria._id != '')
  //  criterios.categoria._id = req.body.categoria._id
  /*
  if(req.body.categoria.tipoProducto != '')
    categoria.tipoProducto = req.body.categoria.tipoProducto;
  if(req.body.categoria.tipoMascota != '')
    categoria.tipoMascota = req.body.categoria.tipoMascota

  criterios.categoria = categoria;
  */
    /*
  if (req.body.categoria._id != "")
    criterios.categoria = req.body.categoria._id;
    */

  //console.log(criterios);

  let proveedores = await Proveedor.find(criterios);
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
        await Proveedor.updateOne({_id: req.body._id}, vproveedor);
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
const Producto = require('../models/producto');
const productoCtrl = {};

productoCtrl.getProducto = async (req, res) => {
    const producto = await Producto.findById(req.params.id).populate('proveedor');
    res.json(producto);
}

productoCtrl.getProductos = async (req, res) => {
    var productos = await Producto.find().populate('proveedor');
    res.json(productos);
}

productoCtrl.addProducto = async (req, res) => {
    var producto = new Producto(req.body);
    try {
        await producto.save();
        res.json({
            'status' : '1',
            'msg' : 'Producto guardado.'
        })
    } catch (error) {
        res.json({
            'status' : '0',
            'msg' : 'Error no se guardo el producto'
        })
    }
}

productoCtrl.deleteProducto = async (req, res) => {
    try {
        await Producto.deleteOne({_id : req.params.id});
        res.json({
            'status' : '1',
            'msg' : 'Producto eliminado'
        })
    } catch (error) {
        res.json({
            'status' : '0',
            'msg' : 'Error no se pudo eliminar el producto'
        })
    }
}

productoCtrl.editProducto= async (req, res) => {
    var producto = new Producto(req.body);
    try {
        await producto.updateOne({_id: req.body._id}, pasaje);
        res.json({
            'status' : '1',
            'msg' : 'Producto actualizado'
        })
    } catch (error) {
        res.json({
            'status' : '0',
            'msg' : 'No se puedo modificar el producto'
        })
    }
}

/*
productoCtrl.getPasajesByCategoriaPasajero = async (req, res) => {
    var pasajes = await Pasaje.find({    
        categoriaPasajero: req.params.categoriaPasajero
    })
    res.json(pasajes);
}*/

module.exports = productoCtrl;
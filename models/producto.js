const mongoose = require('mongoose');

const Categoria = require('./categoria');
const Proveedor = require('./proveedor');
const {Schema} = mongoose;

const ProductoSchema = new Schema({
    codigo:{type: String, required: true},
    nombre:{type: String, required: true},
    descripcion:{type: String, required: true},
    stock:{type: Number, required: true},
    proveedor:{type: Schema.Types.ObjectId, ref: Proveedor, required: true},
    categoria:{type: Schema.Types.ObjectId, ref: Categoria, required: true},
    precioCompra:{type: Number, required: true},
    precioVenta:{type: Number, required: true},
    fechaVencimiento:{type: Date, required: true},
    fechaRecepcion:{type: Date, required: true},
    img:{type: String, required: true}
});

module.exports = mongoose.models.Producto || mongoose.model('Producto', ProductoSchema);

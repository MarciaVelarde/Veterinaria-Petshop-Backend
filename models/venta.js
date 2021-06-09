const mongoose = require('mongoose');
const Pago = require('./pago');
const Producto = require('./producto');
const Usuario = require('./usuario');

const { Schema } = mongoose;

const VentaSchema = new Schema({
    fecha : {type: Date, required: true},
    medioEnvio : {type: String, required: true},
    productos : [{type: Producto.schema}],
    pago : {type: Schema.Types.ObjectId, ref: Pago, required: true},
    //usuario : {type: Schema.Types.ObjectId, ref: Usuario, required: true}
})

module.exports = mongoose.model('Venta', VentaSchema);
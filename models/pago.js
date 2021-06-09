const mongoose = require('mongoose');

const { Schema } = mongoose; 

const PagoSchema = new Schema({
    precioNeto : {type: Number, required: true},
    iva : {type: Number, required: true},
    precioTotal : {type: Number, required: true},
    formaPago : {type: String, required: true}
});

module.exports = mongoose.model('Pago', PagoSchema);
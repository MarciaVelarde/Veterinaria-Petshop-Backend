const mongoose = require('mongoose');

const {Schema} = mongoose;

const ProveedorSchema = new Schema({
    nombre:{type: String, required: true},
    direccion:{type: String, required: true},
    telefono:{type: String, required: true},
    email:{type: String, required: true},
});

module.exports = mongoose.model('Proveedor', ProveedorSchema);
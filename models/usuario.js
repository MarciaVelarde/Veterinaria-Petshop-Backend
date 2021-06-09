const mongoose = require('mongoose');
const Venta = require('./venta');

const { Schema } = mongoose;

const UsuarioSchema = new Schema({
    username : {type: String, required: true},
    password : {type: String, required: true},
    apellido : {type: String, required: true},
    nombre : {type: String, required: true},
    tipoUsuario : {type: String, required: true},
    domicilio : {type: String, required: true},
    email : {type:String, required: true},
    telefono : {type: String, required: true},
    ventas : [{type: Schema.Types.ObjectId, ref: Venta}]
})

module.exports = mongoose.model('Usuario', UsuarioSchema);
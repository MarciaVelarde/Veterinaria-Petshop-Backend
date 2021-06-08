const mongoose = require('mongoose');

const {Schema} = mongoose;

const CategoriaSchema = new Schema({
    tipoProducto:{type: String, required: true},
    tipoMascota:{type: String, required: true}
});

module.exports = mongoose.model('Categoria', CategoriaSchema);
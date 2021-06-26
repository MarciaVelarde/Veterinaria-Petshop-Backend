const Categoria = require('../models/categoria');
const categoriaCtrl = {}

categoriaCtrl.getCategorias = async (req, res) => {
    var categorias = await Categoria.find();
    res.json(categorias);
}

categoriaCtrl.addCategoria = async (req, res) => {
    var categoria = new Categoria(req.body);
    try {
        await categoria.save();
        res.json({
            'status': '1',
            'msg': 'Categoria guardada.'
        })
    } catch (error) {
        res.json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

categoriaCtrl.getCategoria = async (req, res) => {
    const categoria = await Categoria.findById(req.params.id);
    res.json(categoria);
}

categoriaCtrl.editCategoria = async (req, res) => {
    const vcategoria = new Categoria(req.body);
    try {
        await Categoria.updateOne({_id: req.body._id}, vcategoria);
        res.json({
            'status': '1',
            'msg': 'Categoria updated'
        })
    } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
    }
}

categoriaCtrl.deleteCategoria = async (req, res)=>{
 try {
    await Categoria.deleteOne({_id: req.params.id});
    res.json({
        status: '1',
        msg: 'Categoria removed'
 })
 } catch (error) {
    res.json({
        'status': '0',
        'msg': 'Error procesando la operacion'
    })
 }
}

categoriaCtrl.getCategoriaByTipos = async (req, res) => {
    var categoria = await Categoria.find({
        tipoMascota : req.params.tipoMascota,
        tipoProducto : req.params.tipoProducto
    });
    res.json(categoria);
}

module.exports = categoriaCtrl;
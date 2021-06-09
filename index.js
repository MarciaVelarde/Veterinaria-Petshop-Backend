var express = require("express");
var app = express();
const { mongoose } = require("./database");
const cors = require("cors");

app.use(express.json({limit: '10mb'})); //agregar para establecer el limite de los datos
app.use(express.urlencoded({limit: '10mb'}))

//middlewares
//app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Cargamos el modulo de direccionamiento de rutas para puntos
app.use('/api/producto', require('./routes/producto.route'));
app.use('/api/categoria', require('./routes/categoria.route'));
app.use('/api/proveedor', require('./routes/proveedor.route'));
app.use('/api/usuario', require('./routes/usuario.route'));
app.use('/api/pago', require('./routes/pago.route'));
app.use('/api/venta', require('./routes/venta.route'));

//setting
app.set("port", process.env.PORT || 3000);

//starting the server
app.listen( app.get("port"), () => {
  console.log("Server starter on port ", app.get("port"));
});

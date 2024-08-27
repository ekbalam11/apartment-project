// importar módulos de terceros
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

//método para cargar variables de entorno
const dotenv = require('dotenv');
dotenv.config();
//console.log(process.env) // remove this after you've confirmed it is working

// Importar rutas públicas
const indexRoutes = require('./routes/index.js');

//Importar las rutas de administrador
const adminRoutes = require('./routes/admin.js')

// creamos una instancia del servidor Express
const app = express();

// Tenemos que usar un nuevo middleware para indicar a Express que queremos procesar peticiones de tipo POST
app.use(express.urlencoded({ extended: true }));

// Añadimos el middleware necesario para que el client puedo hacer peticiones GET a los recursos públicos de la carpeta 'public'
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

// Especificar a Express que quiero usar EJS como motor de plantillas
app.set('view engine', 'ejs');

// Usamos el middleware morgan para loguear las peticiones del cliente
app.use(morgan('tiny'));

// Añadimos las rutas de Index.js en nuestra ap
// El primer parámtero significa que todas las rutas que se encuentren en 'indexRouter' estarán prefijados por '/'
app.use('/', indexRoutes)
app.use('/admin', adminRoutes)

async function connectDB() {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado a la base de datos');
}

connectDB().catch(err => console.log(err))

app.listen(PORT, (req, res) => {
    console.log("Servidor escuchando correctamente en el puerto " + PORT);
});

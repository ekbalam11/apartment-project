//Aquí creamos un conjunto de funciones que van a dar respuesta a nuestras rutas
//exportamos y del res.render que está en index.js
const getNewApartmentForm = (req, res) => {
    res.render('new-apartment.ejs');
}

module.exports = {
    getNewApartmentForm
}
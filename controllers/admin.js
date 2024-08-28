//Aquí creamos un conjunto de funciones que van a dar respuesta a nuestras rutas
const Apartment = require('../models/apartments.model.js')

const getNewApartmentForm = (req, res) => {
//exportamos y del res.render que está en index.js
    const apartments = Apartment.find()
    res.render('new-apartment.ejs');
}

const postNewApartment = async (req, res) => {
    await Apartment.create({ //Este Apartment viene exportado desde el modelo. El método.create agrega los elementos que uno le pida de la información que el usuario agregó en el Form
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        squareMeters: req.body.squareMeters,
        photo: req.body.photo
    })
    res.send('Apartamento creado')
}

module.exports = {
    getNewApartmentForm,
    postNewApartment
}
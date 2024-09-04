// Importamos el modelo
const Apartment = require('../models/apartments.model.js')

const getApartments = async (req, res) => {
    
    //Obtenemos todos los apartamentos de la base de datos
    const apartments = await Apartment.find();
    
    //Registro de visitas al sitio
    req.session.visitedHome += 1;

    res.render('home', {
        apartments,
        visitedHome: req.session.visitedHome 
    })
};

const getApartmentById = async(req, res) => {
    // 1. Voy al modelo para obtener el parámetro dado su id
    const { idApartment } = req.params;
    const selectedApartment = await Apartment.findById(idApartment);
    
    res.render('detail-apartment', {
        selectedApartment
    })
};

//Buscar apartamentos. Parsear la query string
const searchApartments = async (req, res) => {
    // Paso 3: buscar apartamentos. Parsear la query string que recibo del formulario
    const { maxPrice } = req.query;

    // Obtener del modelo todos los apartamentos cuyo precio sea menor que el precio máximo que el usuario está dispuesto a pagar

    // Pasarle estos apartamentos ya filtrados a la vista
    const apartments = await Apartment.find({ price: { $lte:  maxPrice } });
    res.render('home', {
    apartments
    });
}

module.exports = {
    getApartments,
    getApartmentById,
    searchApartments
}


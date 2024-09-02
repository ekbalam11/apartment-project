const Apartment = require('../models/apartments.model.js')


const getApartments = async (req, res) => {
        const apartments = await Apartment.find();
    
    res.render('home', {
        apartments
    })
};



const getApartmentById = async(req, res) => {
    //1. Voy al modelo para obtener el parámetro dado su id
    const { idApartment } = req.params;
    const selectedApartment = await Apartment.findById(idApartment);
    
    res.render('detail-apartment', {
        selectedApartment
    })
};
//Buscar apartamentos. Parsear la query string
const searchApartments = async (req, res) => {
    const { maxPrice } = req.query;

// Pasarle estos apartamentos  ya filtrados a la vista
const apartments = await Apartment.find({ price: { $lte:  maxPrice } });
    res.render('home', {
    apartments
})

}

module.exports = {
    getApartments,
    getApartmentById,
    searchApartments
}


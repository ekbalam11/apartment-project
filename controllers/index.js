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
    
    res.render('detail-apartment');
};

module.exports = {
    getApartments,
    getApartmentById
}


//Aquí creamos un conjunto de funciones que van a dar respuesta a nuestras rutas
const Apartment = require('../models/apartments.model.js')

const getNewApartmentForm = (req, res) => {
//exportamos y del res.render que está en index.js
    res.render('new-apartment', {
        apartment: {}
    });
}
const getEditApartmentForm = async (req, res) => {
    //1. Recuperar el apartmento identificado por su idAPartment de la base de datos
    const { idApartment } = req.params;

    //2. Ir a la base de dadots y obtener el apartamento dado su Id
    const apartment = await Apartment.findById(idApartment);
    
    // 3. Pasar este apartamento a la vista
    res.render('new-apartment', {
        apartment
    })

} 

const postNewApartment = async (req, res) => {

    // Me han metido más servicios en el req.services que los servicios que yo quiero? kitchen, wifi, etc. res.status(400).send ('Ha ocurrido un error');
    
    //¿Cómo detecto si estoy añadiendo un apartamento o editando un apartamento? Si lo estoy editando, ya tengo un Id.
    const { id } = req.body; 
    
    if(id) {
        //To do: 
        // 1. Buscar el documento en la base de datos a partir de su id
            await Apartment.findByIdAndUpdate(req.body._id, req.body)
            console.log('apartmentUpdate: ', apartmentUpdate);
            
        }
        // 2. Actualizar sus campos a partir del req.body
        res.send('Apartamento actualizado');
        return
    

    await Apartment.create({ //Este Apartment viene exportado desde el modelo. El método.create agrega los elementos que uno le pida de la información que el usuario agregó en el Form
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        squareMeters: req.body.squareMeters,
        photo: req.body.photo,
    })
    res.send('Apartamento creado')
}

module.exports = {
    getNewApartmentForm,
    postNewApartment,
    getEditApartmentForm
}
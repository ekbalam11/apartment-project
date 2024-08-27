//Crear esquema del apartamento
const { Schema, model } = require('mongoose');

const apartmentSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: number,
        required: true
    },
    squareMeters: {
        type: String,
        required: true,
        min: 10
    },
    photo: {
        type: [String],
        min: 1,
        required: true,
        match: [/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/, 'Please fill a valid URL for the image']
    },
    amenities: { //array de strings
        wifi: Boolean,
        airConditioner: Boolean,
        kitchen: Boolean,
        disability: Boolean,
        heater: Boolean,
        tv: Boolean
    },
});

const Apartment = model('Apartment', apartmentSchema);

module.exports = Apartment;
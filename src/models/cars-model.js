const { model, Schema } = require('mongoose');


const carsSchema = new Schema({
    marka: { type: String, required: true },
    model: { type: String, required: true },
    body: { type: String, required: true },
    states: { type: String, required: true },
    region: { type: String, required: true },
    year: { type: String, required: true },
    volume: { type: String, required: true },
    mileage: { type: String, required: true },
    color: { type: String, required: true },
    engine: { type: String, required: true },
    box: { type: String, required: true },
    steering: { type: String, required: true },
    price: { type: String, required: true },
    title: { type: String, required: true },
    createdAt: { type: Date, default: Date.now}, 
})


module.exports = model('cars', carsSchema);

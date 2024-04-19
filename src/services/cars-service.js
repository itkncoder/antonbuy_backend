const carsModel = require("../models/cars-model");

async function createCar(
    marka,
    model,
    body,
    states,
    region,
    year,
    volume,
    mileage,
    color,
    engine,
    box,
    steering,
    price,
    title,
    image
) {
    const product = await carsModel.create({
        marka: marka,
        model: model,
        body: body,
        states: states,
        region: region,
        year: year,
        volume: volume,
        mileage: mileage,
        color: color,
        engine: engine,
        box:box,
        steering: steering,
        price: price,
        title: title,
        image: image
    })

    return product
}

module.exports = {
    createCar
}
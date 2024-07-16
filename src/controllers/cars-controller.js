const ApiError = require("../exceptions/api-error");
const carsModel = require("../models/cars-model");
const { createCar } = require("../services/cars-service");


class CarsController {
    async getAll(req, res, next) {
        try {
            const cars = await carsModel.find({});
            return res.json({ status: 200, data: cars });
        } catch (error) {
            next(error)
        }
    }

    async getOne(req, res, next) {
        try {
            const car = await carsModel.findById(req.params.id);

            if (!car) throw ApiError.BadRequest('Bunday moshina topilmadi');

            return res.json({ status: 200, data: car });
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        try {
            const {
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
                title
            } = req.body;

            const car = await createCar(
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
                title
            );

            console.log(car);

            return res.json({ status: 201, message: "Product created", data: car })
        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next) {
        try {
            const updatedCar = await carsModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

            if(!updatedCar) throw ApiError.BadRequest('Car not found');

            return res.json({ status: 201, message: "Product updated", data: updatedCar })
        } catch (error) {
            next(error)
        }
    }

    async deleteCar(req, res, next) {
        try {
            const deletedCar = await carsModel.findByIdAndDelete(req.params.id);
            if(!deletedCar) throw ApiError.BadRequest('Car not found');

            return res.json({ status: 201, message: "Product deleted", data: deletedCar })
        } catch (error) {
            next(error)
        }
    }
}


module.exports = new CarsController();

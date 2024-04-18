const { Router } = require('express');
const { getAll, getOne, create, update, deleteCar } = require('../controllers/cars-controller.js');

const errorMiddleware = require('../middlewares/error-middleware.js');
const multer = require('../utils/multer-util.js');

const carsRouter = Router();

carsRouter.get('/all', getAll);
carsRouter.get('/all/:id', getOne);
carsRouter.post('/create', multer.single('image'), create);
carsRouter.put('/update/:id', update);
carsRouter.delete('/delete/:id', deleteCar);

carsRouter.use(errorMiddleware);

module.exports = carsRouter;
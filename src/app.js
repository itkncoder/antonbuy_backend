const dotenv = require('dotenv');
const express = require('express');
const mongodb = require('./utils/mongoose-util');

const carsRouter = require('./routes/cars-routes');

// setup
const app = express();
dotenv.config();


// app configs
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

// app routes
app.use('/api/cars', carsRouter)

// app launching
mongodb.connect(process.env.MONGO_URI);
app.listen(process.env.PORT, () => console.log(`> Server started at port: ${process.env.PORT}`));
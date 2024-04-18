const mongoose = require('mongoose');

 async function connect (mongoUri) {
    await mongoose.connect(mongoUri);
    console.log('> MongoDB connected')
}

module.exports = {
    connect
}
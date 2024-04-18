const ml = require('multer');

const storage = ml.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images')
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + "_" +file.originalname)
    }
})

const multer = ml({ storage: storage })

module.exports = multer;
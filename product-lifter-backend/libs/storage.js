const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './storage/images')
  },
  filename: function (req, file, cb) {
    const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, `${uniquePrefix}_${file.originalname}`)
  }
})

const upload = multer({ storage })

module.exports = upload

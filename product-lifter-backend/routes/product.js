const express = require('express')
const { addProduct, getAllProducts, getProduct, getProductsBySkuNameOrDescription } = require('../controllers/productController')
const upload = require('../libs/storage')

const api = express.Router()
  .post('/product', upload.single('image'), addProduct)
  .get('/getAllProducts', getAllProducts)
  .get('/product', getProduct)
  .get('/productBySearchTerm', getProductsBySkuNameOrDescription)

module.exports = api

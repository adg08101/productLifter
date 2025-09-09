const Product = require('../models/Product')

async function addProduct (req, res) {
  try {
    const product = Product(req.body)

    if (req.file) {
      const { filename } = req.file
      product.setImageUrl(filename)
    }

    const savedProduct = await product.save()
    res.status(201).json(savedProduct)
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

module.exports = {
  addProduct
}

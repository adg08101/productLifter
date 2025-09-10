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

async function getAllProducts (req, res) {
  try {
    const products = await Product.find().lean().exec()
    res.status(200).send(products)
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

async function getProduct (req, res) {
  try {
    const product = await Product.find(req.body).lean().exec()
    res.status(200).send(product)
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

async function getProductsBySkuNameOrDescription (req, res) {
  try {
    const searchTerm = req.body.searchTerm
    const regex = new RegExp(searchTerm, 'i')

    const query = {
      $or: [
        { sku: { $regex: regex } },
        { name: { $regex: regex } },
        { description: { $regex: regex } }
      ]
    }

    const products = await Product.find(query).lean().exec()
    res.status(200).send(products)
  } catch (e) {
    res.status(500).send({ error: e.message })
  }
}

module.exports = {
  addProduct,
  getAllProducts,
  getProduct,
  getProductsBySkuNameOrDescription
}

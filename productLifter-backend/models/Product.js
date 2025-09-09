const mongoose = require('mongoose')
const { appConfig } = require('../config')

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
      maxlength: 120
    },
    description: {
      type: String,
      required: [true, 'Product description is required']
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      min: [0, 'Price cannot be negative']
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true
    },
    stock: {
      type: Number,
      default: 0,
      min: [0, 'Stock cannot be negative']
    },
    images: [
      {
        url: { type: String, required: true },
        alt: { type: String }
      }
    ],
    image: {
      type: String
    },
    brand: {
      type: String,
      trim: true
    },
    sku: {
      type: String,
      unique: true,
      sparse: true // allows null values without unique conflicts
    },
    ratings: {
      average: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
      },
      count: {
        type: Number,
        default: 0
      }
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
)

ProductSchema.methods.setImageUrl = function setImageUrl (fileName) {
  const { appHost, appPort } = appConfig
  this.image = `${appHost}:${appPort}/public/${fileName}`
}

module.exports = mongoose.model('Products', ProductSchema)

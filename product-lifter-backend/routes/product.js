const express = require("express");
const {
  addProduct,
  getAllProducts,
  getProduct,
  getProductsBySkuNameOrDescription,
  deleteProduct,
} = require("../controllers/productController");
const upload = require("../libs/storage");

const api = express
  .Router()
  .post("/product", upload.single("image"), addProduct)
  .get("/getAllProducts", getAllProducts)
  .get("/product", getProduct)
  .get("/productBySearchTerm", getProductsBySkuNameOrDescription)
  .delete("/product", deleteProduct);

module.exports = api;

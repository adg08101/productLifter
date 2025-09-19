const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const productRoutes = require("./routes/product");
const path = require("node:path");

const corsOption = {
  methods: ["GET", "POST", "PUT", "DELETE"],
};

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(corsOption));
app.use("/public", express.static(path.join(__dirname, "/storage/images")));
app.use("/v1", productRoutes);

module.exports = app;

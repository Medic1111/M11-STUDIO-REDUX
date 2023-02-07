const handleAsync = require("../utils/handle_async");
const AppError = require("../utils/app_error");
const { Product } = require("../models/products");

const getControl = handleAsync(async (req, res, next) => {
  let products = await Product.find().sort({ identity: 1 });
  res.status(200).json(products);
});

const productsControl = {
  getControl,
};

module.exports = productsControl;

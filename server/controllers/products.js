const handleAsync = require("../utils/handle_async");
const { Product } = require("../models/products");

const getControl = handleAsync(async (req, res, next) => {
  if (req.query.issue) {
    let products = await Product.find({
      issue: req.query.issue,
    }).sort({ identity: 1 });
    return res.status(200).json(products);
  }
  let products = await Product.find().sort({ identity: 1 });
  res.status(200).json(products);
});

const productsControl = {
  getControl,
};

module.exports = productsControl;

const cartRouter = require("express").Router();
const cartControl = require("../controllers/cart");
const validate = require("../utils/validate");

cartRouter
  .route("/:user_id/cart")
  .post(validate, cartControl.addControl)
  .put(validate, cartControl.putControl)
  .patch(validate, cartControl.patchControl);

cartRouter
  .route("/:user_id/cart/checkout")
  .post(validate, cartControl.checkoutControl);

cartRouter
  .route("/:user_id/orders")
  .get(validate, cartControl.getOrdersControl);
module.exports = cartRouter;

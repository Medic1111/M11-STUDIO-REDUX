const handleAsync = require("../utils/handle_async");
const AppError = require("../utils/app_error");
const { User } = require("../models/users");
const stripe = require("stripe")(process.env.STRIPE_KEY);
const sendEmail = require("../utils/send_email");
const { confirmation } = require("../assets/email");
const { Product } = require("../models/products");

const addControl = handleAsync(async (req, res, next) => {
  let user = await User.findById({ _id: req.params.user_id });
  let alreadyInCart = user.cart.find((obj) => obj.item.id === req.body.product);

  if (!alreadyInCart) {
    let updateUser = await User.findByIdAndUpdate(
      { _id: req.params.user_id },
      {
        $push: {
          cart: { item: req.body.product, quantity: 1 },
        },
      },
      { new: true, runValidators: true }
    );

    await Product.findByIdAndUpdate(
      { _id: req.body.product },
      { $inc: { stock: -1 } }
    );

    return res.status(200).json(updateUser);
  }

  if (alreadyInCart.item.stock >= 1) {
    alreadyInCart.quantity++;

    await Product.findByIdAndUpdate(
      { _id: req.body.product },
      { $inc: { stock: -1 } }
    );

    let updateUser = await User.findByIdAndUpdate(
      { _id: req.params.user_id },
      { cart: user.cart },
      { new: true, runValidators: true }
    );
    return res.status(200).json(updateUser);
  } else if (alreadyInCart.item.stock < 0) {
    return res.status(500).json({ message: "Out of stock" });
  }
});

const patchControl = handleAsync(async (req, res, next) => {
  let user = await User.findById({ _id: req.params.user_id });
  let product = user.cart.find((obj) => obj.item.id === req.body.product);

  await Product.findByIdAndUpdate(
    { _id: req.body.product },
    { $inc: { stock: +1 } }
  );

  if (product.quantity <= 1) {
    let user = await User.findByIdAndUpdate(
      { _id: req.params.user_id },
      {
        $pull: { cart: { item: req.body.product } },
      },
      { new: true, runValidators: true }
    );

    return res.status(200).json(user);
  }

  product.quantity--;

  let updateUser = await User.findByIdAndUpdate(
    { _id: req.params.user_id },
    { cart: user.cart },
    { new: true, runValidators: true }
  );

  return res.status(200).json(updateUser);
});

const putControl = handleAsync(async (req, res, next) => {
  let user = await User.findByIdAndUpdate(
    { _id: req.params.user_id },
    {
      $pull: { cart: { item: req.body.product } },
    },
    { new: true, runValidators: true }
  );

  await Product.findByIdAndUpdate(
    { _id: req.body.product },
    { $inc: { stock: req.body.quantity } }
  );

  return res.status(200).json(user);
});

const checkoutControl = handleAsync(async (req, res, next) => {
  const { amount, id, shippingInfo } = req.body;

  const payment = await stripe.paymentIntents.create({
    amount: amount * 100,
    currency: "USD",
    description: "Medic1111",
    payment_method: id,
    confirm: true,
  });
  if (payment.statusCode === 402)
    return next(new AppError("Payment failed", 400));

  let user = await User.findByIdAndUpdate(
    { _id: req.params.user_id },
    {
      cart: [],
      $push: {
        transactions: {
          payId: payment.id,
          cart: req.body.cart,
          purchase_date: new Date().toISOString(),
        },
      },
    },
    { new: true, runValidators: true }
  );

  await sendEmail({
    email: user.email,
    subject: "m-11 Thank you for your purchase",
    message: confirmation(payment.id),
  });

  res.status(200).json(user);
});

const getOrdersControl = handleAsync(async (req, res, next) => {
  let user = await User.findById({ _id: req.params.user_id }).select(
    "+transactions"
  );
  if (!user) return next(new AppError("No user found with that id", 404));
  res.status(200).json(user);
});

const cartControl = {
  addControl,
  patchControl,
  putControl,
  checkoutControl,
  getOrdersControl,
};

module.exports = cartControl;

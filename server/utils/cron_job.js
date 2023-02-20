const { User } = require("../models/users");
const { Product } = require("../models/products");
const handleAsync = require("./handle_async");
const cron_task = handleAsync(async () => {
  const oneHourAgo = Date.now() - 60 * 60 * 1000;

  const expCartUser = await User.find({
    "cart.0": { $exists: true },
    last_login: { $lte: oneHourAgo },
  }).populate("last_login");

  if (!expCartUser || expCartUser.length <= 0) return;

  expCartUser.forEach(async (user) => {
    user.cart.forEach(async (product) => {
      await Product.findByIdAndUpdate(
        { _id: product.item.id },
        { $inc: { stock: product.quantity } }
      );
      await User.findByIdAndUpdate(
        { _id: user.id },
        { cart: [] },
        { new: true, runValidators: true }
      );
    });
  });
});

module.exports = cron_task;

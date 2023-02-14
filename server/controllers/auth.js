const { User } = require("../models/users");
const handleAsync = require("../utils/handle_async");
const AppError = require("../utils/app_error");
const sendEmail = require("../utils/send_email");
const jwt = require("jsonwebtoken");
const { welcome } = require("../assets/email");
const bcrypt = require("bcrypt");

// REGISTER
const registerControl = handleAsync(async (req, res, next) => {
  let user = await User.create(req.body);

  await sendEmail({
    email: req.body.email,
    subject: "Welcome from m-11!",
    message: welcome,
  })
    .then(async () => {
      await User.findById(user._id).then((user) =>
        res.status(201).json({ user, token: "development_only" })
      );
    })
    .catch((err) => {
      return next(new AppError("Could not send Welcome email", 400));
    });
});

// LOGIN
const loginControl = handleAsync(async (req, res, next) => {
  if (!req.body.username || !req.body.password)
    return next(new AppError("Username and password required", 400));

  let user = await User.findOne({ username: req.body.username }).select(
    "+password"
  );

  if (!user || !(await user.decrypt(req.body.password, user.password))) {
    return next(new AppError("Incorrect Password or invalid username", 422));
  }
  user.password = null;

  res.status(200).json({ user, token: "development_only" });
});

// VALIDATE
const validateControl = handleAsync(async (req, res, next) => {
  let token = req.cookies.jwt || req.headers.authorization.slice(7);

  jwt.verify(token, process.env.TOKEN_SECRET, async (err, tokenSpec) => {
    username = tokenSpec.username;
    await User.findOne({ username }).then((user) =>
      res.status(200).json({ user })
    );
  });
});

// LOGOUT
const logoutControl = (req, res) => {
  res.cookie("jwt", "loggedout", {
    maxAge: 100,
    secure: true,
    httpOnly: true,
  });
  res.status(200).json({ message: "Loggout out" });
};

// DELETE ACCOUNT
const deleteUserControl = handleAsync(async (req, res, next) => {
  const user = await User.findById({ _id: req.params.user_id }).select(
    "+password"
  );

  if (!user || !(await user.decrypt(req.body.password, user.password))) {
    return next(new AppError("Incorrect Password", 401));
  }
  // send goodbye email
  await User.findByIdAndDelete({ _id: req.params.user_id })
    .then(() => {
      res.status(200).json({ message: "User Account Deleted" });
    })
    .catch((err) => console.log(err));
});

// VOLUNTARY CHANGE PASSWORD
const changePassControl = handleAsync(async (req, res, next) => {
  const user = await User.findById({ _id: req.params.user_id }).select(
    "+password"
  );

  if (!user || !(await user.decrypt(req.body.currentPassword, user.password))) {
    return next(new AppError("Incorrect Password", 401));
  }
  user.password = req.body.newPassword;
  user.change_password_time = new Date().toISOString();

  await user
    .save()
    .then(() => res.status(200).json({ message: "Password Changed" }))
    .catch((err) => console.log(err));
});

// FORGOT PASSWORD: REQUEST TEMP VIA EMAIL
const forgotPasswordControl = handleAsync(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return next(new AppError("Email not registered", 404));
  const tempCode = `TEMP_PASS${Math.floor(Math.random() * 100000000) + 1}`;
  const hash = await bcrypt.hash(tempCode, 8);
  await user.updateOne({
    temp_password: hash,
    temp_password_exp: new Date().toISOString(),
  });

  await sendEmail({
    email: req.body.email,
    subject: "Forgot Password?",
    message: `Hello, ${user.username}. It seems that you have forgotten your password. Here's your temporary code: ${tempCode}
    After logging in, please change your password immediately as this temporary password will not be active for more than 10 minutes.`,
  }).then(() => {
    res
      .status(200)
      .json({ message: "We sent you an Email. Please check your mailbox" });
  });
});

// RESET PASSWORD: BASED ON TEMP CODE RECEIVED
const resetPasswordControl = handleAsync(async (req, res, next) => {
  if (req.body.newPassword !== req.body.newPasswordConfirm)
    return next(new AppError("Passwords don't match", 400));
  let user = await User.findOne({ username: req.body.username }).select(
    "+temp_password +temp_password_exp"
  );
  if (!user || !user.temp_password)
    return next(new AppError("Incorrect username", 404));
  const msDiff = Math.abs(
    new Date(user.temp_password_exp) - new Date(new Date().toISOString())
  );
  const hourConvertion = msDiff / (60 * 60 * 1000);

  if (hourConvertion >= 0.0625 /*3.25min*/)
    return next(new AppError("Expired temporary password", 401));

  const decrypt = await user.decrypt(
    req.body.temp_password,
    user.temp_password
  );
  if (!decrypt) return next(new AppError("Incorrect temp pass", 401));

  user.password = req.body.newPassword;
  user.temp_password = null;
  user.temp_password_exp = null;
  user.change_password_time = new Date().toISOString();
  await user.save();
  return res.status(200).json({ message: "Password was reset" });
});

const authControl = {
  registerControl,
  loginControl,
  validateControl,
  logoutControl,
  changePassControl,
  deleteUserControl,
  forgotPasswordControl,
  resetPasswordControl,
};

module.exports = { authControl };

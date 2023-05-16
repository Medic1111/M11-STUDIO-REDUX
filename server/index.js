const mongoose = require("mongoose");
const socketio = require("socket.io");
require("dotenv").config();

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXECEPTION: ", err.name, err.message);
  process.exit(1);
});

const app = require("./app");
const socketHandler = require("./utils/socket");

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DB_URI, { useNewUrlParser: true })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(err));

const PORT = (process.env.NODE_ENV = "development" ? 3002 : process.env.PORT);

const server = app.listen(PORT, (err) =>
  err ? console.log(err) : console.log("SERVER SPINNING")
);

const io = socketio(server);

io.on("connection", socketHandler);

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION: ", err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

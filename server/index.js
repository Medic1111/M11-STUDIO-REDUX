const mongoose = require("mongoose");
const socketio = require("socket.io");
const sendEmail = require("./utils/send_email");
const handleAsync = require("./utils/handle_async");
require("dotenv").config();

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXECEPTION: ", err.name, err.message);
  process.exit(1);
});

const app = require("./app");

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

io.on("connection", (socket) => {
  socket.on(
    "JOIN_ROOM",
    handleAsync(async (data) => {
      if (data.username !== "medic1111" && data.username !== "seeduser") {
        await sendEmail({
          email: `${process.env.CUSTOMER_SERVICE}`,
          subject: "SERVICES REQUESTED",
          message: `${data.username} needs help in room ${data.roomId}`,
        });
      }
      console.log(data.roomId);

      socket.join(data.roomId);

      socket.to(data.roomId).emit("RECEIVE_MSG", {
        user: "CHAT",
        message: `${data.username} is here to assist you`,
      });
    })
  );

  socket.on("SEND_MSG", (msgContent) => {
    socket.to(msgContent.roomId).emit("RECEIVE_MSG", msgContent);
  });

  socket.on("disconnect", () => console.log("User Disconnected"));
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION: ", err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

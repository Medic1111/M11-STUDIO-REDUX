const sendEmail = require("./send_email");
const handleAsync = require("./handle_async");
require("dotenv").config();

const socketHandler = (socket) => {
  socket.on(
    "JOIN_ROOM",
    handleAsync(async (data) => {
      if (data.username !== "seeduser" && data.username !== "m11-support") {
        await sendEmail({
          email: `${process.env.CUSTOMER_SERVICE}`,
          subject: "SERVICES REQUESTED",
          message: `${data.username} needs help in room ${data.roomId}`,
        });
      }

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
};

module.exports = socketHandler;

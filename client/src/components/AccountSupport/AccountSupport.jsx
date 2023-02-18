import classes from "./AccountSupport.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AccountSupport = ({ socket }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const user = useSelector((state) => state.auth.currentUser.username);
  const roomId = useSelector((state) => state.ui.roomId);

  const listenToIncoming = () => {
    socket.on("RECEIVE_MSG", (data) => {
      return setMessages((prev) => [...prev, data]);
    });

    return function cleanup() {
      socket.removeListener("RECEIVE_MSG");
    };
  };

  useEffect(listenToIncoming, []);

  const sendMsgHandler = async (e) => {
    e.preventDefault();
    if (message === "") return;
    await socket.emit("SEND_MSG", { message, roomId, user });
    setMessages((prev) => [...prev, { message, user }]);
    setMessage("");
  };

  return (
    <form className={classes.form}>
      <ul className={classes.ul}>
        {messages.map((obj, index) => {
          return (
            <li
              className={obj.user === user ? classes.liUser : classes.liSupport}
              key={`MSG_${index}`}
            >
              <p className={classes.p}>{obj.message}</p>
            </li>
          );
        })}
      </ul>
      <div className={classes.inputBox}>
        <input
          className={classes.input}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type={"text"}
          minLength={1}
          maxLength={3500}
        />
        <button className={classes.btn} onClick={(e) => sendMsgHandler(e)}>
          SEND
        </button>
      </div>
    </form>
  );
};

export default AccountSupport;

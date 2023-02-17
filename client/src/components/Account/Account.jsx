import classes from "./Account.module.css";
import { useSelector } from "react-redux";
import AccountOrders from "../AccountOrders/AccountOrders";
import AccountNav from "../AccountNav/AccountNav";
import AccountShowBox from "../AccountShowBox/AccountShowBox";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3002", {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"], //THIS WAS THE DAMN BUG!!!
  withCredentials: true,
});

const Account = () => {
  const user = useSelector((state) => state.auth.currentUser);

  return (
    <section className={classes.section}>
      <AccountOrders userId={user.id} />
      <div className={classes.col}>
        <AccountShowBox socket={socket} />
        <AccountNav socket={socket} />
        <p className={classes.username}>{user.username}</p>
      </div>
    </section>
  );
};
export default Account;

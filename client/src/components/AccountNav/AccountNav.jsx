import classes from "./AccountNav.module.css";
import CartReturn from "../CartReturn/CartReturn";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../features/ui-slice";
import { useState } from "react";

const AccountNav = ({ socket }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser.username);
  const [support, setSupport] = useState("");

  const showDelete = () => {
    dispatch(uiActions.setShowDeleteAccount());
  };

  const showChangePass = () => {
    dispatch(uiActions.setShowChangePassword());
  };

  const showSupport = () => {
    dispatch(uiActions.setShowSupport());
    if (user === import.meta.env.VITE_SUPPORT) {
      let data = {
        username: "m11-support",
        roomId: Number(support),
      };
      dispatch(uiActions.setRoomId(Number(support)));
      socket.emit("JOIN_ROOM", data);
      return;
    }
    const random = Math.floor(Math.random() * 100000) + 1;
    let data = {
      username: user,
      roomId: random,
    };
    dispatch(uiActions.setRoomId(random));
    socket.emit("JOIN_ROOM", data);
  };

  return (
    <div className={classes.showDiv2}>
      <div className={classes.btnBox}>
        <button className={classes.btn} onClick={showChangePass}>
          CHANGE PASSWORD
        </button>
        <button className={classes.btn} onClick={showDelete}>
          DELETE ACCOUNT
        </button>
        <button onClick={showSupport} className={classes.btn}>
          CUSTOMER SERVICE
        </button>
      </div>
      <span>
        <CartReturn />
      </span>
      {user === import.meta.env.VITE_SUPPORT && (
        <input
          value={support}
          type={"text"}
          onChange={(e) => setSupport(e.target.value)}
        />
      )}
    </div>
  );
};

export default AccountNav;

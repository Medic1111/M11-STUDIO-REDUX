import classes from "./AccountNav.module.css";
import CartReturn from "../CartReturn/CartReturn";
import { useDispatch } from "react-redux";
import { uiActions } from "../../features/ui-slice";

const AccountNav = () => {
  const dispatch = useDispatch();

  const showDelete = () => {
    dispatch(uiActions.setShowDeleteAccount());
  };

  const showChangePass = () => {
    dispatch(uiActions.setShowChangePassword());
  };

  const showSupport = () => {
    dispatch(uiActions.setShowSupport());
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
          COSTUMER SERVICE
        </button>
      </div>
      <span>
        <CartReturn />
      </span>
    </div>
  );
};

export default AccountNav;

import classes from "./AccountNav.module.css";
import CartReturn from "../CartReturn/CartReturn";
const AccountNav = () => {
  return (
    <div className={classes.showDiv2}>
      <div className={classes.btnBox}>
        <button className={classes.btn}>CHANGE PASSWORD</button>
        <button className={classes.btn}>DELETE ACCOUNT</button>
        <button className={classes.btn}>COSTUMER SERVICE</button>
      </div>
      <span>
        <CartReturn />
      </span>
    </div>
  );
};

export default AccountNav;

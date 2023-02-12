import classes from "./Account.module.css";
import { useSelector } from "react-redux";
import AccountOrders from "../AccountOrders/AccountOrders";
import AccountNav from "../AccountNav/AccountNav";
import AccountShowBox from "../AccountShowBox/AccountShowBox";

const Account = () => {
  const user = useSelector((state) => state.auth.currentUser);

  return (
    <section className={classes.section}>
      <AccountOrders userId={user.id} />
      <div className={classes.col}>
        <AccountShowBox />
        <AccountNav />
        <p className={classes.username}>{user.username}</p>
      </div>
    </section>
  );
};
export default Account;

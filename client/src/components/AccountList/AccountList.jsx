import AccountItem from "../AccountItem/AccountItem";
import classes from "./AccountList.module.css";

const AccountList = ({ transactions }) => {
  return (
    <ul className={classes.ul}>
      {transactions.map((obj, index) => {
        return (
          <AccountItem
            key={`TRANSACTION_${index}`}
            cart={obj.cart}
            payId={obj.payId}
            purchase_date={obj.purchase_date}
          />
        );
      })}
    </ul>
  );
};

export default AccountList;

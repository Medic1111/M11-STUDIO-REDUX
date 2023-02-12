import classes from "./AccountItem.module.css";

const AccountItem = ({ purchase_date, cart, payId }) => {
  return (
    <li className={classes.li}>
      <p className={classes.date}>
        purchase date: {purchase_date.slice(0, 10)}
      </p>
      <ul className={classes.innerUl}>
        {cart.map((obj, index) => {
          return (
            <li key={`TRANSACTION_ITEM${index}`} className={classes.innerLi}>
              <p>item: {obj.item.title}</p>
              <p>cost: {obj.item.price}</p>
              <p>qty: {obj.quantity}</p>
            </li>
          );
        })}
      </ul>
      <p className={classes.payId}>transaction: {payId}</p>
    </li>
  );
};

export default AccountItem;

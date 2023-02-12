import AccountList from "../AccountList/AccountList";
import classes from "./AccountOrders.module.css";
import { useGetOrdersQuery } from "../../features/api-slice";

const AccountOrders = ({ userId }) => {
  const { data = { transactions: [] } } = useGetOrdersQuery({
    userId,
  });
  return (
    <div className={classes.orders}>
      <p className={classes.pOrder}>YOUR ORDERS</p>
      <AccountList transactions={data.transactions} />
    </div>
  );
};

export default AccountOrders;

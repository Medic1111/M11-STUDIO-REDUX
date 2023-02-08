import classes from "./CartTotal.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../features/ui-slice";

const CartTotal = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <p className={classes.pTotal}>
      {cart.reduce((acc, obj) => {
        {
          return acc + obj.item.price * obj.quantity;
        }
      }, 0)}{" "}
      total{" "}
      {cart.length > 0 && (
        <span
          className={classes.span}
          onClick={() => dispatch(uiActions.setShowCheckout())}
        >
          check out
        </span>
      )}
    </p>
  );
};

export default CartTotal;

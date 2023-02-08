import classes from "./CartTotal.module.css";

const CartTotal = ({ cart }) => {
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
          // onClick={() => uiMgr.dispatch({ type: "CHECKOUT" })}
        >
          check out
        </span>
      )}
    </p>
  );
};

export default CartTotal;

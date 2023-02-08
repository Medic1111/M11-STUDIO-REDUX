import classes from "./CartCrud.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../features/auth-slice";
import {
  useDecreaseQtyMutation,
  useIncreaseQtyMutation,
  useRemoveFromCartMutation,
} from "../../features/api-slice";

const CartCrud = ({ objId, quantity, objStock }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.currentUser._id);
  const isAuth = useSelector((state) => state.auth.isAuth);

  const [remove] = useRemoveFromCartMutation();
  const [increase] = useIncreaseQtyMutation();
  const [decrease] = useDecreaseQtyMutation();

  const removeHandler = async (itemId) => {
    if (!isAuth) return dispatch(uiActions.setShowAuth(true));
    let args = { userId, itemId, quantity };
    let response = await remove(args);
    if (!response.error)
      return dispatch(authActions.setCurrentUser(response.data));
  };

  const increaseQty = async (itemId) => {
    if (!isAuth) return dispatch(uiActions.setShowAuth(true));
    if (objStock < 1) return;
    let args = { userId, itemId };
    let response = await increase(args);
    if (!response.error)
      return dispatch(authActions.setCurrentUser(response.data));
  };

  const decreaseQty = async (itemId) => {
    if (!isAuth) return dispatch(uiActions.setShowAuth(true));
    let args = { userId, itemId };
    let response = await decrease(args);
    if (!response.error)
      return dispatch(authActions.setCurrentUser(response.data));
  };
  return (
    <div className={classes.crud}>
      <p className={classes.qty}>
        qty: {quantity}
        <span
          onClick={() => increaseQty(objId)}
          className={`${classes.icon} material-symbols-outlined`}
        >
          arrow_upward
        </span>
        <span
          onClick={() => decreaseQty(objId)}
          className={`${classes.icon} material-symbols-outlined`}
        >
          arrow_downward
        </span>
      </p>
      <p className={classes.pRemove} onClick={() => removeHandler(objId)}>
        remove
      </p>
    </div>
  );
};

export default CartCrud;

import classes from "./CartItem.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../features/auth-slice";
import { uiActions } from "../../features/ui-slice";
import {
  useDecreaseQtyMutation,
  useIncreaseQtyMutation,
  useRemoveFromCartMutation,
} from "../../features/api-slice";

const CartItem = ({ obj, quantity }) => {
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
    if (obj.stock < 1) return;
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
    <div className={classes.card}>
      <img alt="wall/street art" className={classes.img} src={obj.url} />
      <div className={classes.txtBox}>
        <p className={classes.pTitle}>{obj.title}</p>
        <p className={classes.pDes}>{obj.description}</p>
        <p className={classes.pArtist}>- {obj.artist}</p>
        <p className={classes.pPrice}>${obj.price}</p>
        <p>
          qty: {quantity} <span onClick={() => increaseQty(obj.id)}>🔼</span>{" "}
          <span onClick={() => decreaseQty(obj.id)}>🔽</span>
        </p>
        <p className={classes.pRemove} onClick={() => removeHandler(obj.id)}>
          remove
        </p>
      </div>
    </div>
  );
};

export default CartItem;

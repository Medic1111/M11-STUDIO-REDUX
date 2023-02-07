import classes from "./CartItem.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../features/auth-slice";
import { uiActions } from "../../features/ui-slice";

const CartItem = ({ obj, quantity }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.currentUser._id);
  const isAuth = useSelector((state) => state.auth.isAuth);

  const removeHandler = async (itemId) => {
    if (!isAuth) return dispatch(uiActions.setShowAuth(true));
    await axios
      .put(`/api/v1/user/${userId}/cart`, { product: itemId, quantity })
      .then((serverRes) => {
        dispatch(authActions.setCurrentUser(serverRes.data));
      })
      .catch((err) => console.log(err));
  };

  const increaseQty = async (itemId) => {
    if (!isAuth) return dispatch(uiActions.setShowAuth(true));
    if (obj.stock < 1) return;

    await axios
      .post(`/api/v1/user/${userId}/cart`, {
        product: itemId,
      })
      .then((serverRes) => {
        dispatch(authActions.setCurrentUser(serverRes.data));
      })
      .catch((err) => console.log(err));
  };

  const decreaseQty = async (itemId) => {
    if (!isAuth) return dispatch(uiActions.setShowAuth(true));
    await axios
      .patch(`/api/v1/user/${userId}/cart`, { product: itemId })
      .then((serverRes) => {
        dispatch(authActions.setCurrentUser(serverRes.data));
      })
      .catch((err) => console.log(err));
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

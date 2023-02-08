import classes from "./ArtItemBtn.module.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../features/auth-slice";
import { uiActions } from "../../features/ui-slice";
import { useIncreaseQtyMutation } from "../../features/api-slice";

const ArtItemBtn = ({
  content,
  index,
  itemId,
  setStockCount,
  stockCount,
  stock,
}) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.currentUser._id);
  const [showAdd, setShowAdd] = useState(false);
  const isAuth = useSelector((state) => state.auth.isAuth);

  // TEST
  const [increase] = useIncreaseQtyMutation();

  const handleAdd = async () => {
    if (!isAuth) return dispatch(uiActions.setShowAuth(true));
    // await axios
    //   .post(`/api/v1/user/${user_id}/cart`, {
    //     product: id,
    //   })
    //   .then((serverRes) => {
    //     if (stockCount < 1) return;
    //     setStockCount((prev) => prev - 1);
    //     dispatch(authActions.setCurrentUser(serverRes.data));
    //   })
    //   .catch((err) => console.log(err));
    if (stock < 1) return;
    let args = { userId, itemId };
    let response = await increase(args);
    if (!response.error)
      return dispatch(authActions.setCurrentUser(response.data));
  };

  return (
    <button
      onClick={handleAdd}
      className={classes.btn}
      onMouseOver={() => setShowAdd(true)}
      onMouseOut={() => setShowAdd(false)}
    >
      {showAdd || `.0${index + 1}`}
      <span className={showAdd ? classes.showAdd : classes.hideAdd}>
        ${content}
      </span>
      <span className={showAdd ? classes.showAdd : classes.hideAdd}>add</span>
    </button>
  );
};

export default ArtItemBtn;

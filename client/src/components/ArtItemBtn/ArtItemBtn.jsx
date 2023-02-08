import classes from "./ArtItemBtn.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../features/auth-slice";
import { uiActions } from "../../features/ui-slice";
import { useIncreaseQtyMutation } from "../../features/api-slice";

const ArtItemBtn = ({ content, index, itemId, setStockCount, stock }) => {
  const dispatch = useDispatch();
  const [increase] = useIncreaseQtyMutation();
  const userId = useSelector((state) => state.auth.currentUser._id);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const [showAdd, setShowAdd] = useState(false);

  const handleAdd = async () => {
    if (!isAuth) return dispatch(uiActions.setShowAuth(true));
    if (stock < 1) return;
    let args = { userId, itemId };
    let response = await increase(args);
    if (!response.error) {
      setStockCount((prev) => prev - 1);
      return dispatch(authActions.setCurrentUser(response.data));
    }
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

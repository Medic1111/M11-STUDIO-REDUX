import classes from "./ArtItemBtn.module.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../features/auth-slice";
import { uiActions } from "../../features/ui-slice";

const ArtItemBtn = ({ content, index, id, setStockCount, stockCount }) => {
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.auth.currentUser._id);
  const [showAdd, setShowAdd] = useState(false);
  const isAuth = useSelector((state) => state.auth.isAuth);

  const handleAdd = async () => {
    if (!isAuth) return dispatch(uiActions.setShowAuth(true));
    await axios
      .post(`/api/v1/user/${user_id}/cart`, {
        product: id,
      })
      .then((serverRes) => {
        if (stockCount < 1) return;
        setStockCount((prev) => prev - 1);
        dispatch(authActions.setCurrentUser(serverRes.data));
      })
      .catch((err) => console.log(err));
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

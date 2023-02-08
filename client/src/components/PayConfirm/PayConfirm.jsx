import classes from "./PayConfirm.module.css";
import { uiActions } from "../../features/ui-slice";
import { useDispatch } from "react-redux";

const PayConfirm = ({ setShowConfirm }) => {
  const dispatch = useDispatch();
  return (
    <div className={classes.confirm}>
      <p>Payment successful</p>
      <button
        className={classes.btn}
        onClick={() => {
          setShowConfirm(false);
          dispatch(uiActions.closeModal());
        }}
      >
        RETURN
      </button>
    </div>
  );
};

export default PayConfirm;

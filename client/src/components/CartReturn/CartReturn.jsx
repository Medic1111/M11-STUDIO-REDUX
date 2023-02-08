import classes from "./CartReturn.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../features/ui-slice";

const CartReturn = () => {
  const dispatch = useDispatch();

  return (
    <span
      onClick={() => dispatch(uiActions.closeModal())}
      className={`${classes.return} material-symbols-outlined`}
    >
      keyboard_return
    </span>
  );
};

export default CartReturn;

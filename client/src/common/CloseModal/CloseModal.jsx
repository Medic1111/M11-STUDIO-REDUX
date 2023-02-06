import { useDispatch } from "react-redux";
import { uiActions } from "../../features/ui-slice";
import { authActions } from "../../features/auth-slice";

const CloseModal = ({ className, text }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        dispatch(authActions.setIsLoggin(true));
        dispatch(uiActions.closeModal());
      }}
      className={className}
    >
      {text}
    </button>
  );
};

export default CloseModal;

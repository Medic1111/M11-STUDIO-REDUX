import classes from "./FormWrapper.module.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../features/ui-slice";

const FormWrapper = ({ children }) => {
  const dispatch = useDispatch();

  const handleCloseModal = (e) => {
    if (e.target.className === "_article_o9ln3_1") {
      return dispatch(uiActions.closeModal());
    }
    return;
  };
  return (
    <article onClick={handleCloseModal} className={classes.article}>
      {children}
    </article>
  );
};

export default FormWrapper;

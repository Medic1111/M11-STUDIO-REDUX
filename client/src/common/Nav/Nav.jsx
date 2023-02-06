import classes from "./Nav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../features/ui-slice";
import { authActions } from "../../features/auth-slice";
import { useLazyLogoutQuery } from "../../features/api-slice";

const Nav = () => {
  const authSelector = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [trigger] = useLazyLogoutQuery();

  const handleLogout = async () => {
    const call = await trigger();
    if (call.status === "fulfilled" && !call.isError) {
      dispatch(authActions.logout());
      dispatch(uiActions.closeModal());
    }
  };

  return (
    <ul className={classes.ul}>
      <a href="#expo" className={classes.li}>
        Expo
      </a>
      <a href="#us" className={classes.li}>
        Us
      </a>

      <li
        onClick={() => {
          authSelector.isAuth
            ? handleLogout()
            : dispatch(uiActions.setShowAuth(true));
        }}
        className={classes.li}
      >
        {authSelector.isAuth ? "Leave" : "Login"}
      </li>
    </ul>
  );
};

export default Nav;

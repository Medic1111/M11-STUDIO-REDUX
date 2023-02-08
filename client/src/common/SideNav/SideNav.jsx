import React from "react";
import classes from "./SideNav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../features/ui-slice";
import { authActions } from "../../features/auth-slice";
import { useLazyLogoutQuery } from "../../features/api-slice";

const SideNav = () => {
  const dispatch = useDispatch();
  const authSelector = useSelector((state) => state.auth);
  const [trigger] = useLazyLogoutQuery();

  const handleLogout = async () => {
    const call = await trigger();
    if (call.status === "fulfilled" && !call.isError) {
      dispatch(authActions.logout());
      dispatch(uiActions.closeModal());
    }
  };

  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        {!authSelector.isAuth ? (
          <li>
            <span
              onClick={() => dispatch(uiActions.setShowAuth(true))}
              style={{ fontSize: "5em" }}
              className={`${classes.li} material-symbols-outlined`}
            >
              login
            </span>
          </li>
        ) : (
          <>
            <li>
              <span
                onClick={() => handleLogout()}
                style={{ fontSize: "5em" }}
                className={`${classes.li} material-symbols-outlined`}
              >
                logout
              </span>
            </li>
            <li>
              <span
                onClick={() => dispatch(uiActions.setShowCart(true))}
                style={{ fontSize: "5em" }}
                className={`${classes.li} material-symbols-outlined`}
              >
                shopping_bag
              </span>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default SideNav;

import { useValidateQuery } from "../features/api-slice";
import { authActions } from "../features/auth-slice";
import { uiActions } from "../features/ui-slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useAutoLogout = () => {
  const dispatch = useDispatch();
  const { data, error } = useValidateQuery();

  useEffect(() => {
    if (error) {
      dispatch(authActions.logout());
      dispatch(uiActions.closeModal());
      return () => {};
    }
    if (data) dispatch(authActions.auth_in(data.user));
    return () => {};
  }, [data, error, dispatch]);
};

export default useAutoLogout;

import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";
import axios from "axios";

const authInitialState = {
  isAuth: false,
  isLoggin: true,
  currentUser: {},
  formData: {},
};

export const authSlice = createSlice({
  name: "AUTH_SLICE",
  initialState: authInitialState,
  reducers: {
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setIsLoggin: (state, action) => {
      state.isLoggin = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    logout: (state) => {
      state.currentUser = { cart: [] };
      state.isAuth = false;
    },
    auth_in: (state, action) => {
      state.currentUser = action.payload;
      state.isAuth = true;
    },
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export const authApi = (setErr, setErrMsg) => {
  return async (dispatch, getState) => {
    const authHandler = async () => {
      dispatch(uiActions.setIsLoading(true));
      let url = getState().auth.isLoggin
        ? `/api/v1/auth/login`
        : `/api/v1/auth/register`;
      await axios
        .post(url, getState().auth.formData)
        .then((serverRes) => {
          dispatch(authActions.auth_in(serverRes.data.user));
          dispatch(uiActions.closeModal());
        })
        .catch((err) => {
          setErrMsg(err.response.data.message);
          setErr(true);
        });
    };

    await authHandler();
    dispatch(uiActions.setIsLoading(false));
  };
};

export default authSlice.reducer;

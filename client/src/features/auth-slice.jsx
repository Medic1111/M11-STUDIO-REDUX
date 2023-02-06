import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  isAuth: false,
  isLoggin: true,
  currentUser: {},
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
      state.isLoggin = true;
    },
    auth_in: (state, action) => {
      state.currentUser = action.payload;
      state.isAuth = true;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;

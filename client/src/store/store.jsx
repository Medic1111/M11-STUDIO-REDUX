import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../features/ui-slice";
import authReducer from "../features/auth-slice";
import { authApi } from "../features/api-slice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(authApi.middleware);
  },
});

export default store;

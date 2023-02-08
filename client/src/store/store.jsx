import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../features/ui-slice";
import authReducer from "../features/auth-slice";
import { authApi } from "../features/api-slice";
import { cartApi } from "../features/api-slice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat([
      authApi.middleware,
      cartApi.middleware,
    ]);
  },
});

export default store;

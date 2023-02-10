import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "AUTH_API",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:3002/api/v1/auth",
    baseUrl: "https://m11-n5ne.onrender.com/api/v1/auth",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    validate: builder.query({
      query: () => "/validate",
    }),
    logout: builder.query({
      query: () => "/logout",
    }),
    login: builder.mutation({
      query: (formData) => ({
        url: "/login",
        method: "POST",
        body: formData,
      }),
    }),
    register: builder.mutation({
      query: (formData) => ({
        url: "/register",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const cartApi = createApi({
  reducerPath: "CART_API",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:3002/api/v1/user",
    baseUrl: "https://m11-n5ne.onrender.com/api/v1/user",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    removeFromCart: builder.mutation({
      query: (args) => ({
        url: `/${args.userId}/cart`,
        method: "PUT",
        body: { product: args.itemId, quantity: args.quantity },
      }),
    }),
    increaseQty: builder.mutation({
      query: (args) => ({
        url: `/${args.userId}/cart`,
        method: "POST",
        body: { product: args.itemId },
      }),
    }),
    decreaseQty: builder.mutation({
      query: (args) => ({
        url: `/${args.userId}/cart`,
        method: "PATCH",
        body: { product: args.itemId },
      }),
    }),
    checkout: builder.mutation({
      query: (args) => ({
        url: `/${args.userId}/cart/checkout`,
        method: "POST",
        body: { id: args.id, amount: args.amount, cart: args.cart },
      }),
    }),
  }),
});

export const {
  useValidateQuery,
  useLazyLogoutQuery,
  useLoginMutation,
  useRegisterMutation,
} = authApi;

export const {
  useRemoveFromCartMutation,
  useIncreaseQtyMutation,
  useDecreaseQtyMutation,
  useCheckoutMutation,
} = cartApi;

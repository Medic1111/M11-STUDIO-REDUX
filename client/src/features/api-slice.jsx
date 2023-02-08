import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "AUTH_API",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3002/api/v1/auth",
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
        url: "/auth/register",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const cartApi = createApi({
  reducerPath: "CART_API",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3002/api/v1/user",
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
} = cartApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "AUTH_API",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/v1/auth",
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
    delete: builder.mutation({
      query: (args) => ({
        url: `/account/${args.userId}`,
        method: "DELETE",
        body: { password: args.password },
      }),
    }),
    changePassword: builder.mutation({
      query: (args) => ({
        url: `/password/new/${args.userId}`,
        method: "PATCH",
        body: {
          currentPassword: args.currentPassword,
          newPassword: args.newPassword,
        },
      }),
    }),
  }),
});

export const cartApi = createApi({
  reducerPath: "CART_API",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/v1/user",
    credentials: "include",
  }),
  tagTypes: ["Orders"],
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
      invalidatesTags: ["Orders"],
    }),
    getOrders: builder.query({
      query: (args) => `/${args.userId}/orders`,
      providesTags: ["Orders"],
    }),
  }),
});

export const {
  useValidateQuery,
  useLazyLogoutQuery,
  useLoginMutation,
  useRegisterMutation,
  useDeleteMutation,
  useChangePasswordMutation,
} = authApi;

export const {
  useRemoveFromCartMutation,
  useIncreaseQtyMutation,
  useDecreaseQtyMutation,
  useCheckoutMutation,
  useGetOrdersQuery,
} = cartApi;

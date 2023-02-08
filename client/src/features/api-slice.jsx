import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "AUTH_API",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3002/api/v1",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    validate: builder.query({
      query: () => "/auth/validate",
    }),
    logout: builder.query({
      query: () => "/auth/logout",
    }),
    login: builder.mutation({
      query: (formData) => ({
        url: "/auth/login",
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
    removeFromCart: builder.mutation({
      query: (args) => ({
        url: `/user/${args.userId}/cart`,
        method: "PUT",
        body: { product: args.itemId, quantity: args.quantity },
      }),
    }),
    increaseQty: builder.mutation({
      query: (args) => ({
        url: `/user/${args.userId}/cart`,
        method: "POST",
        body: { product: args.itemId },
      }),
    }),
    decreaseQty: builder.mutation({
      query: (args) => ({
        url: `/user/${args.userId}/cart`,
        method: "PATCH",
        body: { product: args.itemId },
      }),
    }),
  }),
});

// export const cartApi = createApi({
//   reducerPath: "CART_API",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:3002/api/v1/user",
//     credentials: "include",
//   }),
//   endpoints: (builder) => ({
//     decreaseQty: builder.mutation({
//       query: (userId, itemId) => ({
//         url: `/user/${userId}/cart`,
//         method: "PATCH",
//         body: { product: itemId },
//       }),
//     }),
//     removeFromCart: builder.mutation({
//       query: (userId, itemId, quantity) => ({
//         url: `/${userId}/cart`,
//         method: "PUT",
//         body: { product: itemId, quantity },
//       }),
//     }),
//     increaseQty: builder.mutation({
//       query: (userId, itemId) => ({
//         url: `/${userId}/cart`,
//         method: "POST",
//         body: { product: itemId },
//       }),
//     }),
//   }),
// });

export const {
  useValidateQuery,
  useLazyLogoutQuery,
  useLoginMutation,
  useRegisterMutation,
  useRemoveFromCartMutation,
  useIncreaseQtyMutation,
  useDecreaseQtyMutation,
} = authApi;

// export const {
//   useRemoveFromCartMutation,
//   useIncreaseQtyMutation,
//   useDecreaseQtyMutation,
// } = cartApi;

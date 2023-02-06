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
        url: "/register",
        method: "POST",
        body: formData,
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

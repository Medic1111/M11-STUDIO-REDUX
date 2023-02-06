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
  }),
});

export const { useValidateQuery, useLazyLogoutQuery } = authApi;

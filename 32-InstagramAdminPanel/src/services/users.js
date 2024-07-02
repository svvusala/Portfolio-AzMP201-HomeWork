import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useGetUserByIdQuery } = usersApi;

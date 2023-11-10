import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//import { ServerResponse, IRepos, ParamsQuery } from "../models/models";

interface ServerResponse {
  status?: boolean;
  detail?: string;
  data?: DataToken;
  error?: DataErorr;
}

interface DataToken {
  user_id?: number;
  auth_token?: string;    
}

interface DataErorr {
  detail?: string;
  status?: boolean;
}

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bayonetta.ru/",
  }),
  endpoints: (builder) => ({
    regUser: builder.mutation<ServerResponse, string>({
      query: (body: string) => ({
        method: "POST",
        url: `users/signup`,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body,
      }),
    }),
    logUser: builder.mutation<ServerResponse, string>({
      query: (body: string) => ({
        method: "POST",
        url: `users/login`,
        body,
      }),
    }),
  }),
});

export const { useRegUserMutation, useLogUserMutation } = usersApi;

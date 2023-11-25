import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//import { ServerResponse, IRepos, ParamsQuery } from "../models/models";

interface ServerResponse {
  status?: boolean;
  detail?: string;
  data?: DataToken | DataErorr;
  //error?: DataErorr;
}

interface DataToken {
  user_id?: number;
  auth_token?: string;
}

interface DataErorr {
  detail?: string;
  status?: boolean;
}

export interface ServerResponseExit {
  data: ResponseLogout;
}
export interface ServerResponseExitError {
  error: ServerResponseExit;
}
interface ResponseLogout {
  status?: boolean;
  detail?: string;
}
interface OutUser {
  user_id: number;
  token: string;
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
    logOutUser: builder.mutation<
      ServerResponseExit | ServerResponseExitError,
      OutUser
    >({
      query: ({ user_id, token }) => ({
        method: "get",
        url: `users/logout?user_id=${user_id}&token=${token}`,
      }),
    }),
  }),
});

export const { useRegUserMutation, useLogUserMutation, useLogOutUserMutation } =
  usersApi;

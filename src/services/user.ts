import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//import { ServerResponse, IRepos, ParamsQuery } from "../models/models";

interface ServerResponse {
  status: boolean;
  detail: string;
  data: DataToken;
}

interface DataToken {
  user_id: number;
  auth_token: string;
}

interface ParamsQueryReg {
  login: string;
  password: string;
}

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bayonetta.ru/",
  }),
  endpoints: (builder) => ({
    regUser: builder.mutation<ServerResponse, ParamsQueryReg>({
      query: (params: ParamsQueryReg) => ({
        method: "POST",
        url: `users/signup`,
        params: {
          login: params.login,
          pass: params.password,
        },
      }),
    }),
  }),
});

export const { useRegUserMutation } = usersApi;

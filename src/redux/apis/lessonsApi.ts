import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const lessonsApi = createApi({
  
  reducerPath: "lessonsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bayonetta.ru/",
  }),
  endpoints: (builder) => ({
    getLessonsApi: builder.query({
      query: () => {
        return {
          url: 'posts/general',
          method: 'GET',
        };
      },
    }),
    getLessonId: builder.query({
      query: (lessonId) => {
        return {
          url: `posts/${lessonId}`,
          method: 'GET',
        };
      },
    }),
  }),
  
});
export const { useGetLessonsApiQuery, useGetLessonIdQuery } = lessonsApi;


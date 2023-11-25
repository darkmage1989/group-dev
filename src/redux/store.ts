import { configureStore } from "@reduxjs/toolkit";
import dataExerciseSlice from "./slices/dataExerciseSlice";
import { lessonsApi } from "./apis/lessonsApi";
import { usersApi } from "./apis/user";
export const store = configureStore({
  reducer: {
    [lessonsApi.reducerPath]: lessonsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    dataExerciseSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(lessonsApi.middleware)
      .concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

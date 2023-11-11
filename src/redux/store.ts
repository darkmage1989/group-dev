import { configureStore } from "@reduxjs/toolkit";
import dataExerciseSlice from "./slices/dataExerciseSlice";
import { lessonsApi } from "./apis/lessonsApi";
export const store = configureStore({
  reducer: {
    [lessonsApi.reducerPath]: lessonsApi.reducer,
    dataExerciseSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(lessonsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

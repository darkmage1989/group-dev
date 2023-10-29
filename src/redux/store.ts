import { configureStore } from "@reduxjs/toolkit";
import dataExerciseSlice from './slices/dataExerciseSlice'
export const store = configureStore({
  reducer: {
    dataExerciseSlice
  },
    
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

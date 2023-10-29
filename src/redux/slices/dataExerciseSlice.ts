import { createSlice } from "@reduxjs/toolkit";

const dataExerciseSlice = createSlice({
  name: "dataExerciseSlice",
  initialState: {
    dataExercise: [],
  },
  reducers: {
    setDataExercise: (state, actions) => {
      state.dataExercise = actions.payload;
    },
  },
});
export const { setDataExercise } = dataExerciseSlice.actions;
export default dataExerciseSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
};

const choicesSlice = createSlice({
  name: "choices",
  initialState,
  reducers: {
    getChoice: (state, action) => {
      state.chosen = action.payload;
    },
  },
});

export const { getChoice } = choicesSlice.actions;

export default choicesSlice.reducer;

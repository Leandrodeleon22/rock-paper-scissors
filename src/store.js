import { configureStore } from "@reduxjs/toolkit";
import choiceReducer from "./features/choicesSlice";

export const store = configureStore({
  reducer: {
    choices: choiceReducer,
  },
});

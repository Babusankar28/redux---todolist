import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice";
export const store = configureStore({
  devTools: true,
  reducer: {
    todo: todoReducer,
  },
});

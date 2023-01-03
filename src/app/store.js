import { configureStore } from "@reduxjs/toolkit";
import puzzleState from "./puzzleReducer/puzzleState";

export const store = configureStore({
  reducer: {
    puzzleState: puzzleState,
  },
});

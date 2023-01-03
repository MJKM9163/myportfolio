import { createSlice } from "@reduxjs/toolkit";

export const puzzleState = createSlice({
  name: "puzzleState",
  initialState: {
    startCheck: false,
    guideCheck: {
      type: null,
      name: null,
    },
  },
  reducers: {
    setStartCheck: (state, action) => {
      state.startCheck = true;
    },
    setGuideCheck: (state, action) => {
      state.guideCheck = action.payload.handle;
    },
  },
});

export const { setStartCheck, setGuideCheck } = puzzleState.actions;
export default puzzleState.reducer;

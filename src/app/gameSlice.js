import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "gameSlice",
  initialState: {
    myDeck: [],
    enemyDeck1: [],
    enemyDeck2: [],
    enemyDeck3: [],
    direction: "left",
  },
  reducers: {
    cardAdd: (state, action) => {
      const { target, newCard } = action.payload;
      state[target].push(newCard);
    },
    cardDelete: (state, action) => {
      const { target, deleteCard } = action.payload;
      state[target].push(deleteCard);
    },
    directionChange: (state, action) => {
      const { direction } = action.payload;
      state.direction = direction;
    },
  },
});

export default gameSlice;
export const { cardAdd, cardDelete, directionChange } = gameSlice.actions;

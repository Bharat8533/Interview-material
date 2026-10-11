import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    numberIncrement: (state, action) => {
      state.value += Number(action.payload)
    }
  },
});

export const { increment, decrement, numberIncrement } = counterSlice.actions;
export default counterSlice.reducer
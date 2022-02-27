import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;

// thunk
// This allows for delayed actions, including working with promises.

export const incrementByAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(counterActions.incrementByAmount(amount));
  }, 1000);
};

//selector
// select a value from the state
export const selectValue = (state) => state.counter.value;

export default counterSlice.reducer;

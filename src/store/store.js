import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import todosSlice from "./todoSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    todos: todosSlice,
  },
});

export default store;

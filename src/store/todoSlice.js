import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ name: "Todo #1", id: 1 }],
  completedTodos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        name: action.payload,
        id: new Date().getTime().toString(),
      });
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
});

export const todosActions = todosSlice.actions;

export default todosSlice.reducer;

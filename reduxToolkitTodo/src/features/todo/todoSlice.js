import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  editingTodo: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setEditingTodo: (state, action) => {
      state.editingTodo = action.payload;
    },
    saveEdit: (state, action) => {
      const { id, text } = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        existingTodo.text = text;
        state.editingTodo = null;
      }
    },
  },
});

export const { addTodo, removeTodo, setEditingTodo, saveEdit } =
  todoSlice.actions;
export default todoSlice.reducer;

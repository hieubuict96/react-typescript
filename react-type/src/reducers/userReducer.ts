import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  a: 1
}

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded(state: any, action) {
      state.a += 1;
    },

    todoToggled(state: any, action) {
      const todo = state.find((todo: any) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
  },
});

export const { todoAdded, todoToggled } = todosSlice.actions;
export default todosSlice.reducer;

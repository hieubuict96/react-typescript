import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../reducers/userReducer";

const rootReducer = {
  todos: todosReducer
}

export const store = configureStore({
  reducer: rootReducer
});

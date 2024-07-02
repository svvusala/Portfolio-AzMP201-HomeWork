import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./UserTableSlice";

export const store = configureStore({
  reducer: {
    user: usersReducer,
  },
});

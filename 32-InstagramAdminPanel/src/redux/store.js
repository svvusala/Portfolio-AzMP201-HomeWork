import { configureStore } from "@reduxjs/toolkit";
// import { usersApi } from "../services/users";
// import { setupListeners } from "@reduxjs/toolkit/query";
import usersReducer from "./UserTableSlice";

export const store = configureStore({
  reducer: {
    // [usersApi.reducerPath]: usersApi.reducer,
    user: usersReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(usersApi.middleware),
});

// setupListeners(store.dispatch);

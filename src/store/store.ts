import { configureStore } from "@reduxjs/toolkit";
import mainBookReducer from "./feautures/mainBooksSlice";

export const store = configureStore({
  reducer: {
    books: mainBookReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

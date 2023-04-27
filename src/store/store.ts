import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
import booksReducer from "./feautures/mainBooksSlice";
import searchReducer from "./feautures/searchSlice";
import storage from "redux-persist/lib/storage";
import useReducer from "./feautures/userSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites"],
};

const rootReducer = combineReducers({
  user: useReducer,
  books: booksReducer,
  search: searchReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: { persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

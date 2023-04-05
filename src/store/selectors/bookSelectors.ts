import { RootState } from "../store";

export const getBooks = (state: RootState) => state.persistedReducer.books;

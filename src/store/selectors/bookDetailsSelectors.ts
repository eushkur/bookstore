import { RootState } from "../store";

export const getDetailsBook = (state: RootState) => state.persistedReducer.bookDetails;

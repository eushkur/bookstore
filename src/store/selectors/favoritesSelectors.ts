import { RootState } from "../store";

export const getFavoritesBooks = (state: RootState) => state.persistedReducer.booksFavorites;

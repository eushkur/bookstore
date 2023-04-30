import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookDetails } from "types/types";

interface FavoritesState {
  favoritesBooks: BookDetails[];
}

const initialState: FavoritesState = {
  favoritesBooks: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavotires(state, { payload }: PayloadAction<BookDetails>) {
      const result = state.favoritesBooks.find((book) => book.isbn13 === payload.isbn13);
      if (!result) state.favoritesBooks.push(payload);
    },
    removeFavorite(state, { payload }: PayloadAction<string>) {
      state.favoritesBooks = state.favoritesBooks.filter((book) => {
        return book.isbn13 !== payload;
      });
    },
  },
});

export default favoritesSlice.reducer;

export const { addToFavotires, removeFavorite } = favoritesSlice.actions;

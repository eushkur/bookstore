import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Book, BookResponseBySearch } from "types/types";

interface SearchBooksState {
  booksBySearch: Book[];
  isLoading: boolean;
  error: null | string;
  debounceSearchValue: string;
  total: string;
}

const initialState: SearchBooksState = {
  booksBySearch: [],
  isLoading: false,
  error: null,
  debounceSearchValue: "",
  total: "",
};

const fetchBooksBySearch = createAsyncThunk<
  BookResponseBySearch,
  { query: string; page: number },
  { rejectValue: string }
>("search/fetchBooksBySearch", async (params, { rejectWithValue }) => {
  try {
    const { data } = await axios.get<BookResponseBySearch>(
      `https://api.itbook.store/1.0/search/${params.query} `,
    );
    return data;
  } catch (error) {
    const { message } = error as AxiosError;
    return rejectWithValue(message);
  }
});

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    getDebounceSearchValue(state, { payload }: PayloadAction<string>) {
      state.debounceSearchValue = payload;
    },

    resetDebounceSearchValue(state) {
      state.debounceSearchValue = "";
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchBooksBySearch.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchBooksBySearch.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      if (payload.books) {
        state.booksBySearch = payload.books;
        state.total = payload.total;
      }
    });
    builder.addCase(fetchBooksBySearch.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default searchSlice.reducer;

export { fetchBooksBySearch };
export const { getDebounceSearchValue, resetDebounceSearchValue } = searchSlice.actions;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Book, BookResponse } from "../../types/types";


interface BooksState {
  books: Book[];
  isLoading: boolean;
  error: null | string;
}

const initialState: BooksState = {
  books: [],
  isLoading: false,
  error: null,
};

const fetchBooks = createAsyncThunk<
  BookResponse,
  undefined,
  { rejectValue: string }
>('books/fetchBooks', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`https://api.itbook.store/1.0/new`);
    return data;
  } catch (error) {
    const { message } = error as AxiosError;
    return rejectWithValue(message);
  }
});

const mainBooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBooks.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchBooks.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.books = payload.books;
    });
    builder.addCase(fetchBooks.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default mainBooksSlice.reducer;

export { fetchBooks };
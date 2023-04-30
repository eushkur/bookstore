import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { getDetailsByIsbn13, getBooksBySearch } from "services/BookStoreApi";
import { BookDetails, Book, BookResponseBySearch } from "types/types";
import { getSemanticWord } from "utils/semanticWord";

interface BookResources {
  bookDetails: BookDetails;
  booksSimilar: Book[];
  isLoading: boolean;
  error: null | string;
}

const initialState: BookResources = {
  bookDetails: {
    error: "",
    title: "",
    subtitle: "",
    authors: "",
    publisher: "",
    isbn10: "",
    isbn13: "",
    pages: "",
    year: "",
    rating: "",
    desc: "",
    price: "",
    image: "",
    url: "",
    pdf: {
      "Chapter 2": "",
      "Chapter 5": "",
    },
  },
  booksSimilar: [],
  isLoading: false,
  error: null,
};

const fetchBookByDetails = createAsyncThunk<
  { bookDetails: BookDetails; booksSimilar: BookResponseBySearch },
  string,
  { rejectValue: string }
>("bookDetails/fetchBookByDetails", async (id, { rejectWithValue }) => {
  try {
    const bookDetails = await getDetailsByIsbn13(id);
    const query = getSemanticWord(bookDetails.title);

    const booksSimilar = await getBooksBySearch({ query: query, page: 1 });
    return { bookDetails, booksSimilar };
  } catch (error) {
    const axiosError = error as AxiosError;
    return rejectWithValue(axiosError.message);
  }
});

const bookDetailsSlice = createSlice({
  name: "bookDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchBookByDetails.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchBookByDetails.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.bookDetails = payload.bookDetails;
      state.booksSimilar = payload.booksSimilar.books;
    });
    builder.addCase(fetchBookByDetails.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default bookDetailsSlice.reducer;

export { fetchBookByDetails };

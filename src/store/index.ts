import { useToggle, useWindowSize, useInput, useDebounce } from "hooks";
import { fetchBookByDetails } from "./feautures/bookDetailsSlice";
import {
  addToCart,
  removeFromCart,
  addQuantity,
  deleteQuantity,
  calcTotal,
} from "./feautures/cartSlice";
import { addToFavotires, removeFavorite } from "./feautures/favoritesSlice";
import { fetchBooks } from "./feautures/mainBooksSlice";
import {
  fetchBooksBySearch,
  getDebounceSearchValue,
  resetDebounceSearchValue,
} from "./feautures/searchSlice";
import {
  changeTheme,
  fetchSignUpUser,
  fetchSignInUser,
  fetchSignOut,
  fetchResetPassword,
  resetError,
  fetchUpdateEmailAndPassword,
} from "./feautures/userSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { getDetailsBook } from "./selectors/bookDetailsSelectors";
import { getBooks } from "./selectors/bookSelectors";
import { getCartBooks } from "./selectors/cartSelectors";
import { getFavoritesBooks } from "./selectors/favoritesSelectors";
import { getBooksBySearch } from "./selectors/searchSelectors";
import { getUserInfo } from "./selectors/userSelectors";
import { store, persistor } from "./store";
import userReducer from "./feautures/userSlice";
import booksReducer from "./feautures/bookDetailsSlice";
import bookDetailsReducer from "./feautures/bookDetailsSlice";
import bookFavoritesReducer from "./feautures/favoritesSlice";
import cartReducer from "./feautures/cartSlice";
import searchReducer from "./feautures/searchSlice";

export {
  changeTheme,
  useToggle,
  useWindowSize,
  useAppDispatch,
  useInput,
  useDebounce,
  useAppSelector,
  store,
  userReducer,
  booksReducer,
  fetchBooks,
  getBooks,
  fetchSignUpUser,
  fetchSignInUser,
  getUserInfo,
  bookDetailsReducer,
  fetchBookByDetails,
  getDetailsBook,
  getFavoritesBooks,
  bookFavoritesReducer,
  addToFavotires,
  removeFavorite,
  fetchSignOut,
  cartReducer,
  getCartBooks,
  addToCart,
  removeFromCart,
  addQuantity,
  deleteQuantity,
  calcTotal,
  fetchResetPassword,
  resetError,
  fetchUpdateEmailAndPassword,
  searchReducer,
  fetchBooksBySearch,
  getBooksBySearch,
  getDebounceSearchValue,
  resetDebounceSearchValue,
  persistor,
};

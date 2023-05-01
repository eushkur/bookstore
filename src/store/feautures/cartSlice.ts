import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookCart } from "types/types";

interface CartState {
  cartBooks: BookCart[];
  sum: number;
  vat: number;
  total: number;
}

const initialState: CartState = {
  cartBooks: [],
  sum: 0,
  vat: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }: PayloadAction<BookCart>) {
      const indexBook = state.cartBooks.findIndex((book) => book.isbn13 === payload.isbn13);

      if (indexBook < 0) {
        const newBook = {
          ...payload,
          quantity: 1,
        };
        state.cartBooks = [...state.cartBooks, newBook];
      } else {
        const newBook = {
          ...state.cartBooks[indexBook],
          quantity: state.cartBooks[indexBook].quantity + 1,
        };
        const newCart = state.cartBooks.slice();
        newCart.splice(indexBook, 1, newBook);
        state.cartBooks = newCart;
      }
    },
    removeFromCart(state, { payload }: PayloadAction<string>) {
      state.cartBooks = state.cartBooks.filter((book) => {
        return book.isbn13 !== payload;
      });
    },

    addQuantity(state, { payload }: PayloadAction<string>) {
      // eslint-disable-next-line array-callback-return
      state.cartBooks.map((book) => {
        if (book.isbn13 === payload) {
          return (book.quantity = book.quantity + 1);
        }
      });
    },

    deleteQuantity(state, { payload }: PayloadAction<string>) {
      // eslint-disable-next-line array-callback-return
      state.cartBooks.map((book) => {
        if (book.isbn13 === payload && book.quantity !== 0) {
          return (book.quantity = book.quantity - 1);
        }
      });
    },

    calcTotal(state) {
      state.sum = state.cartBooks.reduce((sum, book) => {
        if (book.price !== "$0.00") {
          const priceArray = book.price.split("");
          priceArray.splice(0, 1);
          const price = priceArray.join("");
          return sum + +price * +book.quantity;
        } else {
          return sum;
        }
      }, 0);

      state.vat = state.sum * 0.2;
      state.total = state.sum + state.vat;
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart, addQuantity, deleteQuantity, calcTotal } =
  cartSlice.actions;

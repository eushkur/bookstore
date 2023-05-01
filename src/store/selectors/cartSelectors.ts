import { RootState } from "../store";

export const getCartBooks = (state: RootState) => state.persistedReducer.cart;

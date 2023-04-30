import { Book } from "types/types";

export const getFreeBooks = (books: Book[]) => {
  return books.filter((book) => book.price === "$0.00");
};

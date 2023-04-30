import axios from "axios";
import { BookDetails, BookResponseBySearch, SearchValue } from "types/types";

export const getDetailsByIsbn13 = async (isbn13: string) => {
  const { data } = await axios.get<BookDetails>(`https://api.itbook.store/1.0/books/${isbn13}`);
  return data;
};

export const getBooksBySearch = async ({ query, page }: SearchValue) => {
  const { data } = await axios.get<BookResponseBySearch>(
    `https://api.itbook.store/1.0/search/${query}/${page} `,
  );
  return data;
};

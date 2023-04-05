export interface Book {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

export interface BookResponse {
  error: string;
  total: string;
  books: Book[];
}

export interface BookResponseBySearch {
  total: string;
  page: string;
  books: Book[];
}

export interface BookDetails {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf?: BookPDF;
}

export interface BookCart {
  error: string;
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10: string;
  isbn13: string;
  pages: string;
  year: string;
  rating: string;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf?: BookPDF;
  quantity: number;
}

export interface BookPDF {
  [format: string]: string;
}

export interface SearchValue {
  query: string;
  page: number;
}

export interface Book {
    authors: string;
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
  
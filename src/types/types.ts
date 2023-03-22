export interface IBook {
    title: string;
    subtitle: string;
    isbn13: string;
    price: string;
    image: string;
    url: string;
  }

  export interface IBookResponse {
    error: string;
    total: string;
    books: IBook[];
  }
  
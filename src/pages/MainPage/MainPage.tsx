import { useEffect } from "react";
import { Title, BookCard } from "../../components";
import { fetchBooks } from "../../store/feautures/mainBooksSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { StyledBooksList, StyledMainPage } from "./styles";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, books } = useAppSelector((state) => state.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <StyledMainPage>
      <Title />

    {isLoading && (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )}

    {error && <p>ERRORRRRRR</p>}

    <StyledBooksList>
        {books.map((book, index) => {
          return <BookCard book={book} index={index} key={book.isbn13} />;
        })}
        ;
      </StyledBooksList>
    </StyledMainPage>
);
};
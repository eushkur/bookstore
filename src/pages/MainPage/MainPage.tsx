import { useEffect } from "react";
import { Title, BookCard } from "../../components";
import { fetchBooks } from "../../store/feautures/mainBooksSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getBooks } from "store/selectors/bookSelectors";
import { StyledMainPage, StyledBooksList, StyledError } from "./styles";
import { Error } from "../../components/atoms/Error/Error";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, books } = useAppSelector(getBooks);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <StyledMainPage>
      <Title value="New releases book" />

      {isLoading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {error && (
        <StyledError>
          <Error value={error} />
        </StyledError>
      )}

      <StyledBooksList>
        {books.map((book, index) => {
          return <BookCard book={book} index={index} key={book.isbn13} />;
        })}
        ;
      </StyledBooksList>
    </StyledMainPage>
  );
};

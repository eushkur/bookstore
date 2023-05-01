import { CSSProperties, useEffect } from "react";
import { Title, BookCard } from "../../components";
import { fetchBooks } from "../../store/feautures/mainBooksSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { getBooks } from "store/selectors/bookSelectors";
import { StyledMainPage, StyledBooksList, StyledError } from "./styles";
import { Error } from "../../components/atoms/Error/Error";
import { Subscription } from "components/molecules/Subscription/Subscription";
import Spinner from "react-spinners/ClipLoader";
import { Color } from "ui";
const override: CSSProperties = {
  margin: "200px auto",
};
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
        <Spinner color={Color.PRIMARY} loading={isLoading} cssOverride={override} size={60} />
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
      <Subscription />
    </StyledMainPage>
  );
};

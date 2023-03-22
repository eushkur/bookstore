import { useEffect } from "react";
import { fetchBooks } from "../../store/feautures/mainBooksSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";



export const MainPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, error, books } = useAppSelector((state) => state.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
    <p> "New book"</p>

    {isLoading && (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )}
    {error && <p>ERRORRRRRR</p>}

    <div>
      <ul>
        {books.map((book) => {
          return (
            <li>
              {book.title}
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);
};
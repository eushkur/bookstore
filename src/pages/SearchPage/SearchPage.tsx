import { BookCard, Title } from "components";
import { StyledError } from "pages/DetailsBookPage/styles";
import { CSSProperties, useEffect } from "react";
import Spinner from "react-spinners/ClipLoader";
import { Breakpoint, Color } from "ui";
import {
  StyledSearchPage,
  SearchBooks,
  Info,
  BooksSearchWrapper,
  Message,
  Pagination,
  MiddlePageList,
  PageItem,
  PageItemButton,
  PageList,
} from "./styles";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { Error } from "../../components/atoms/Error/Error";
import { getBooksBySearch } from "store/selectors/searchSelectors";
import { useWindowSize } from "hooks/useWindowSize";
import { ButtonArrow } from "pages/AccountPage/styles";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTE } from "routes";
import { fetchBooksBySearch } from "store/feautures/searchSlice";
import { ArrowLeftPagination, ArrowRightPagination } from "assets";

const override: CSSProperties = {
  margin: "200px auto",
};

export const SearchPage = () => {
  const { booksBySearch, isLoading, error, debounceSearchValue, total } =
    useAppSelector(getBooksBySearch);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentPage = useParams().page || 1;
  const { width = 0 } = useWindowSize();

  const countPages = Math.ceil(+total / 10);

  const handlePrevPage = () => {
    currentPage && +currentPage !== 1 && navigate(`/${ROUTE.SEARCH}${+currentPage + -1}`);
  };

  const handleNextPage = () => {
    currentPage && +currentPage !== countPages && navigate(`/${ROUTE.SEARCH}${+currentPage + 1}`);
  };

  const handlePage = (event: any) => {
    event.target.textContent && navigate(`/${ROUTE.SEARCH}${+event.target.textContent}`);
  };

  useEffect(() => {
    currentPage && dispatch(fetchBooksBySearch({ query: debounceSearchValue, page: +currentPage }));
  }, [currentPage, debounceSearchValue, dispatch]);

  return (
    <StyledSearchPage>
      <SearchBooks>
        <Title value={`"${debounceSearchValue}" search results`} />

        {isLoading && (
          <Spinner color={Color.PRIMARY} loading={isLoading} cssOverride={override} size={60} />
        )}

        {error && (
          <StyledError>
            <Error value={error} />
          </StyledError>
        )}

        {!isLoading && !error && (
          <>
            {<Info>Found {total} books</Info>}

            {booksBySearch.length !== 0 ? (
              <BooksSearchWrapper>
                {booksBySearch.map((book, index) => {
                  return <BookCard book={book} key={book.isbn13} index={index} />;
                })}
              </BooksSearchWrapper>
            ) : (
              <Message>No results found</Message>
            )}
          </>
        )}
      </SearchBooks>
      {countPages ? (
        <Pagination>
          <ButtonArrow
            onClick={handlePrevPage}
            disabled={currentPage && currentPage ? +currentPage === 1 : false}
          >
            <ArrowLeftPagination width={"25"} fill={Color.PRIMARY} /> Prev
          </ButtonArrow>

          {countPages > 3 && +currentPage <= 3 && width > Breakpoint.MD && (
            <PageList>
              <PageItem>
                <PageItemButton onClick={handlePage} $isActive={+currentPage === 1}>
                  {+currentPage === 1 && "1"}
                  {+currentPage === 2 && +currentPage - 1}
                  {+currentPage === 3 && +currentPage - 2}
                </PageItemButton>
              </PageItem>

              <PageItem>
                <PageItemButton onClick={handlePage} $isActive={+currentPage === 2}>
                  {+currentPage === 1 && +currentPage + 1}
                  {+currentPage === 2 && "2"}
                  {+currentPage === 3 && +currentPage - 1}
                </PageItemButton>
              </PageItem>

              <PageItem>
                <PageItemButton onClick={handlePage} $isActive={+currentPage === 3}>
                  {+currentPage === 1 && +currentPage + 2}
                  {+currentPage === 2 && +currentPage + 1}
                  {+currentPage === 3 && "3"}
                </PageItemButton>
              </PageItem>
              {+currentPage !== 4 && (
                <PageItem>
                  <PageItemButton $isActive={false}>...</PageItemButton>
                </PageItem>
              )}

              <PageItem>
                <PageItemButton onClick={handlePage} $isActive={false}>
                  {countPages}
                </PageItemButton>
              </PageItem>
            </PageList>
          )}

          {+currentPage > 3 && +currentPage < countPages - 2 && width > Breakpoint.MD && (
            <PageList>
              <PageItem>
                <PageItemButton onClick={handlePage} $isActive={false}>
                  1
                </PageItemButton>
              </PageItem>

              <PageItem>
                <PageItemButton $isActive={false}>...</PageItemButton>
              </PageItem>

              <PageItem>
                <PageItemButton onClick={handlePage} $isActive={true}>
                  {+currentPage}
                </PageItemButton>
              </PageItem>

              <PageItem>
                <PageItemButton $isActive={false}>...</PageItemButton>
              </PageItem>

              <PageItem>
                <PageItemButton onClick={handlePage} $isActive={false}>
                  {countPages}
                </PageItemButton>
              </PageItem>
            </PageList>
          )}

          {countPages > 5 && +currentPage >= countPages - 2 && width > Breakpoint.MD && (
            <PageList>
              <PageItem>
                <PageItemButton onClick={handlePage} $isActive={false}>
                  1
                </PageItemButton>
              </PageItem>

              <PageItem>
                <PageItemButton $isActive={false}>...</PageItemButton>
              </PageItem>

              <PageItem>
                <PageItemButton onClick={handlePage} $isActive={+currentPage === countPages - 2}>
                  {+currentPage === countPages - 2 && `${countPages - 2}`}
                  {+currentPage === countPages - 1 && +currentPage - 1}
                  {+currentPage === countPages && +currentPage - 2}
                </PageItemButton>
              </PageItem>

              <PageItem>
                <PageItemButton onClick={handlePage} $isActive={+currentPage === countPages - 1}>
                  {+currentPage === countPages - 2 && +currentPage + 1}
                  {+currentPage === countPages - 1 && `${countPages - 1}`}
                  {+currentPage === countPages && +currentPage - 1}
                </PageItemButton>
              </PageItem>

              <PageItem>
                <PageItemButton onClick={handlePage} $isActive={+currentPage === countPages}>
                  {+currentPage === countPages - 2 && +currentPage + 2}
                  {+currentPage === countPages - 1 && +currentPage + 1}
                  {+currentPage === countPages && `${countPages}`}
                </PageItemButton>
              </PageItem>
            </PageList>
          )}

          {(width < Breakpoint.MD || countPages <= 3) && (
            <MiddlePageList>
              Page {currentPage} of {countPages ? countPages : 1}
            </MiddlePageList>
          )}

          <ButtonArrow
            onClick={handleNextPage}
            disabled={countPages ? +currentPage === countPages : false}
          >
            Next
            <ArrowRightPagination width={"25"} fill={Color.PRIMARY} />
          </ButtonArrow>
        </Pagination>
      ) : (
        ""
      )}
    </StyledSearchPage>
  );
};

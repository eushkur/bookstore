import Spinner from "react-spinners/ClipLoader";
import { AccountIcon, SearchIcon } from "assets";
import { useInput, useWindowSize, useDebounce } from "hooks";
import { CSSProperties, useState, useEffect } from "react";
import { useMatch, useParams, useNavigate, Link } from "react-router-dom";
import { ROUTE } from "routes";
import { Breakpoint, Color } from "ui";
import { Error } from "components";
import {
  SearchInput,
  SearchButton,
  SearchListWrapper,
  SearchList,
  SearchCard,
  WrapperImage,
  Image,
  Title,
  Message,
  SearchError,
  Search,
  StyledError,
} from "./styles";
import { AnimatePresence } from "framer-motion";
import {
  fetchBooksBySearch,
  getBooksBySearch,
  getDebounceSearchValue,
  useAppDispatch,
  useAppSelector,
} from "store";

const searchCardVariants = {
  visible: (index: number) => ({ opacity: 1, scale: 1, transition: { delay: index * 0.1 } }),
  hidden: { opacity: 0, scale: 1.2 },
};

interface SearchHeaderProps {
  handleBurger?: () => void;
}

const override: CSSProperties = {
  margin: "100px auto",
};

export const SearchHeader = ({ handleBurger }: SearchHeaderProps) => {
  const dispatch = useAppDispatch();
  const { value, onChange, setValue } = useInput();
  const [isOpen, toggleIsOpen] = useState<boolean>(false);
  const { width = 0 } = useWindowSize();
  const debounceSearchValue = useDebounce(value);
  const { booksBySearch, isLoading, error } = useAppSelector(getBooksBySearch);
  const currentPageMain = useMatch(ROUTE.MAIN);
  const currentPage = useParams().page;
  const currentPageSearch = useMatch(`${ROUTE.SEARCH}${currentPage}`);
  const currentPageFavorites = useMatch(ROUTE.FAVORITES);
  const currentPageCart = useMatch(ROUTE.CART);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDebounceSearchValue(debounceSearchValue));
  }, [debounceSearchValue, dispatch]);

  useEffect(() => {
    !currentPageFavorites &&
      !currentPageCart &&
      dispatch(fetchBooksBySearch({ query: debounceSearchValue, page: 1 }));
  }, [debounceSearchValue, dispatch, currentPageFavorites, currentPageCart]);

  useEffect(() => {
    if (currentPageMain && debounceSearchValue && width > Breakpoint.LG) {
      toggleIsOpen(true);
    } else {
      toggleIsOpen(false);
    }
  }, [debounceSearchValue, width, currentPageMain]);

  useEffect(() => {
    if (!currentPageMain) {
      toggleIsOpen(false);

      if (!currentPageSearch) {
        setValue("");
      }
    }
  }, [currentPageMain, currentPageSearch, setValue]);

  const handleSearchPage = () => {
    !currentPageFavorites && !currentPageCart && navigate(`${ROUTE.SEARCH}1`);
  };

  return (
    <>
      <Search whileHover={{ scale: 1.05 }}>
        <SearchInput placeholder="Search..." onChange={onChange} value={value} />
        <SearchButton onClick={handleBurger} whileHover={{ scale: 1.05 }}>
          <SearchIcon width="20" stroke={Color.SECONDARY} onClick={handleSearchPage} />
        </SearchButton>
      </Search>
      <AnimatePresence>
        {isOpen && (
          <SearchListWrapper
            animate={{ height: "50vh" }}
            initial={{ height: "0" }}
            exit={{ height: "0" }}
            transition={{ duration: 0.4 }}
          >
            {isLoading && (
              <Spinner color={Color.PRIMARY} loading={isLoading} cssOverride={override} size={60} />
            )}
            {error && (
              <StyledError>
                <Error value={error} />
              </StyledError>
            )}
            {booksBySearch.length > 0 && (
              <SearchList>
                {booksBySearch.map((book, index) => {
                  return (
                    <Link to={`${ROUTE.DETAILS_BOOK}${book.isbn13}`} key={book.isbn13}>
                      <SearchCard
                        whileTap={{ scale: 1.1 }}
                        variants={searchCardVariants}
                        initial="hidden"
                        animate="visible"
                        custom={index}
                      >
                        <WrapperImage>
                          <Image src={book.image} alt={book.title} />
                        </WrapperImage>
                        <Title>{book.title}</Title>
                      </SearchCard>
                    </Link>
                  );
                })}
              </SearchList>
            )}

            {booksBySearch.length === 0 && (
              <>
                <Message>
                  No results found for <SearchError>{debounceSearchValue}</SearchError>
                  <AccountIcon width="50" height="60" fill={Color.SECONDARY} />
                </Message>
              </>
            )}
          </SearchListWrapper>
        )}
      </AnimatePresence>
    </>
  );
};

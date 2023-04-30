import { SecondaryTitle } from "components/atoms/SecondaryTitle/SecondaryTitle";
import { Slider } from "components/atoms/Slider/Slider";
import { useAppSelector } from "store/hooks/hooks";
import { getBooks } from "store/selectors/bookSelectors";
import { StyledFreeBooks } from "./styles";
import { getFreeBooks } from "utils/freeBooks";

export const FreeBooks = () => {
  const { books } = useAppSelector(getBooks);
  const freeBooks = getFreeBooks(books);

  return (
    <StyledFreeBooks>
      <SecondaryTitle value="Free books" />
      <Slider booksArray={freeBooks} />
    </StyledFreeBooks>
  );
};

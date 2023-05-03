import { getBooks, useAppSelector } from "store";
import { StyledFreeBooks } from "./styles";
import { getFreeBooks } from "utils/freeBooks";
import { SecondaryTitle, Slider } from "components";

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

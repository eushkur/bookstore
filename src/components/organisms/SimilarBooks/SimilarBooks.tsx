import { Book } from "types/types";
import { StyledSimilarBooks } from "./styles";
import { SecondaryTitle, Slider } from "components";

interface Props {
  booksSimilar: Book[];
}

export const SimilarBooks = ({ booksSimilar }: Props) => {
  return (
    <StyledSimilarBooks>
      <SecondaryTitle value="Similar books" />
      <Slider booksArray={booksSimilar} />
    </StyledSimilarBooks>
  );
};

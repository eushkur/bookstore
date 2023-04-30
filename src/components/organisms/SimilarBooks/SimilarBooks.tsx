import { Book } from "types/types";
import { StyledSimilarBooks } from "./styles";
import { SecondaryTitle } from "components/atoms/SecondaryTitle/SecondaryTitle";
import { Slider } from "components/atoms/Slider/Slider";

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

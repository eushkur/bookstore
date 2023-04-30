import { FavoritesBooks } from "components/molecules/FavoritesBooks/FavoritesBooks";
import { StyledFavoritesPage } from "./styles";
import { FreeBooks } from "components/molecules/FreeBooks/FreeBooks";

export const FavoritesPage = () => {
  return (
    <StyledFavoritesPage>
      <FavoritesBooks />
      <FreeBooks />
    </StyledFavoritesPage>
  );
};

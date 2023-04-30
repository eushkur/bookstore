import { Like, StyledButtonLike } from "./styles";

interface IProps {
  isFavorites: boolean;
  disabled?: boolean;
}

export const ButtonLike = ({ isFavorites, disabled }: IProps) => {
  return (
    <StyledButtonLike $isFavorites={isFavorites} disabled={disabled}>
      <Like $isFavorites={isFavorites} />
    </StyledButtonLike>
  );
};

import { Color } from "ui";
import { StyledCloseCard } from "./styles";
import { CloseCardIcon } from "assets";

interface CloseProps {
  onClick?: () => void;
}

export const CloseCard = ({ onClick }: CloseProps) => {
  return (
    <StyledCloseCard onClick={onClick}>
      <CloseCardIcon width="24" fill={Color.PRIMARY} />
    </StyledCloseCard>
  );
};

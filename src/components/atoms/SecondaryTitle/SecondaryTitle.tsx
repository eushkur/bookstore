import { StyledSecondaryTitle } from "./styles";

interface Props {
  value: string;
}

export const SecondaryTitle = ({ value }: Props) => {
  return <StyledSecondaryTitle>{value}</StyledSecondaryTitle>;
};

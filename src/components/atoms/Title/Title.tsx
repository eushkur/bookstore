import { StyledTitle } from "./styles";

interface Props {
  value: string;
}

export const Title = ({ value }: Props) => {
  return <StyledTitle>{value}</StyledTitle>;
};

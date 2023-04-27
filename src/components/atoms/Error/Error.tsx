import { StyledError } from "./styles";

interface Props {
  value: string;
}

export const Error = ({ value }: Props) => {
  return <StyledError> ❌{value}</StyledError>;
};

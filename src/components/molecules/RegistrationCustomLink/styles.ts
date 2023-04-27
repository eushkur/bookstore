import { PathMatch } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

const StyledCustomLink = styled.div<{ $active: PathMatch<string> | null }>`
  width: 50%;
  color: ${({ $active }) => ($active ? `${Color.PRIMARY}` : `${Color.SECONDARY}`)};
  border-bottom: ${({ $active }) =>
    $active ? `2px solid ${Color.PRIMARY}` : `2px solid ${Color.SECONDARY}`};
`;

export { StyledCustomLink };

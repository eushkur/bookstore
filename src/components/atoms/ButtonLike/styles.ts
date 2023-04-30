import styled from "styled-components";
import { LikeIcon } from "assets";
import { Color } from "ui";

const StyledButtonLike = styled.button<{ $isFavorites: boolean }>`
  width: 56px;
  height: 56px;
  padding: 16px;
  background: ${({ $isFavorites }) => ($isFavorites ? "none" : Color.PRIMARY)};
  border: none;
  cursor: pointer;

  :disabled {
    background: ${Color.SECONDARY};
  }
`;

const Like = styled(LikeIcon)<{ $isFavorites: boolean }>`
  width: 24px;
  height: 24px;
  stroke: ${({ $isFavorites }) => ($isFavorites ? Color.RED : Color.WHITE)};
  fill: ${({ $isFavorites }) => ($isFavorites ? Color.RED : "none")};
  border: none;
  cursor: pointer;

  :hover,
  :active {
    stroke: ${Color.RED};
    fill: ${Color.RED};
  }
`;

export { StyledButtonLike, Like };

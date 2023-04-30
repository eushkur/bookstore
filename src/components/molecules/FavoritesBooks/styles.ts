import styled from "styled-components";
import { motion } from "framer-motion";
import { H3, Media } from "ui";

const StyledFavoritesBooks = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonArrow = styled(motion.button)`
  text-align: start;
  width: 50px;
  margin-bottom: 32px;
  background: none;
  border: none;
  cursor: pointer;
  ${Media.MD} {
    margin-bottom: 24px;
  }
`;

const FavoritesWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 45px;
  margin-top: 45px;
  ${Media.MD} {
    grid-gap: 35px;
    margin-top: 35px;
  }
`;

const Message = styled.h3`
  ${H3}
`;

export { StyledFavoritesBooks, ButtonArrow, FavoritesWrapper, Message };

import { motion } from "framer-motion";
import styled from "styled-components";
import { Color } from "ui/colors";
import { H3, BODY2 } from "ui/typography";

const StyledBookCard = styled(motion.li)`
  display: grid;
  box-shadow: 1px 1px 12px ${Color.GRAY};
`;

const WrapperImage = styled.img`
  background-color: ${Color.BLUE};
  padding: 1px 63px;
  width: 100%;
`;

const BookContainer = styled.div`
  display: grid;
  gap: 10px;
  color: ${Color.PRIMARY};
  padding: 0px 10px 5px;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BookTitle = styled.h3`
  text-transform: uppercase;
  display: -webkit-box;
  height: 84px;
  padding-top: 20px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  ${H3};
`;

const BookDescription = styled.p`
  color: ${Color.SECONDARY};
  ${BODY2};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Price = styled.h3`
  color: ${Color.PRIMARY};
  ${H3};
`;

export {
  StyledBookCard,
  WrapperImage,
  BookTitle,
  BookDescription,
  Price,
  BookContainer,
  PriceContainer,
};

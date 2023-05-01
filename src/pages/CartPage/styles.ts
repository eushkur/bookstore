import { motion } from "framer-motion";
import styled from "styled-components";
import { BODY2, Color, H2, H3, Media } from "ui";

const StyledCartPage = styled.div`
  display: grid;
  margin-block: 72px;
  ${Media.MD} {
    margin-block: 56px;
  }
`;

const CartWrapper = styled.div`
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

const CartContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 48px;
  margin-top: 48px;
  ${Media.MD} {
    grid-gap: 36px;
    margin-top: 36px;
  }
`;

const Message = styled.h3`
  ${H3}
`;

const ResultContainer = styled.div`
  width: 30%;
  margin-left: auto;
  margin-top: 48px;
  ${Media.LG} {
    width: 50%;
  }
  ${Media.MD} {
    width: 100%;
    margin-top: 36px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const InfoTitle = styled.p`
  ${BODY2}
  font-weight: 400;
  color: ${Color.SECONDARY};
`;

const Info = styled.p`
  ${BODY2}
  font-weight: 400;
  color: ${Color.PRIMARY};
`;

const Price = styled.h3`
  ${H2};
`;

export {
  StyledCartPage,
  CartWrapper,
  ButtonArrow,
  CartContainer,
  Message,
  ResultContainer,
  InfoContainer,
  InfoTitle,
  Info,
  Price,
};

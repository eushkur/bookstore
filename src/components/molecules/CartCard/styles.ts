import styled from "styled-components";
import { motion } from "framer-motion";
import { BODY2, Color, H2, H3, Media } from "ui";
import { MinusIcon, PlusIcon } from "assets";

const StyledCartCard = styled(motion.li)`
  position: relative;
  z-index: 1;
  display: flex;
  padding-bottom: 45px;
  border-bottom: 1px solid ${Color.GRAY};
  ${Media.MD} {
    flex-direction: column;
    padding-bottom: 32px;
  }
`;

const CloseWrapper = styled.div`
  position: absolute;
  top: 20%;
  right: 0;
  ${Media.LG} {
    top: 0;
  }
  ${Media.MD} {
    background: ${Color.SECONDARY};
  }
`;

const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  padding: 0 45px;
  margin-right: 30px;
  background: ${Color.BLUE};
  ${Media.LG} {
    padding: 0 35px;
  }
  ${Media.MD} {
    padding: 0 50px;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
  max-width: 165px;
  width: 100%;
  ${Media.MD} {
    max-width: 175px;
  }
`;

const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  ${Media.LG} {
    width: 100%;
  }
`;

const InfoContainer = styled.div`
  margin-bottom: 25px;
  ${Media.LG} {
    margin-right: 15%;
  }
  ${Media.MD} {
    flex-direction: column;
    margin-right: 0;
  }
`;

const InfoTitle = styled.p`
  margin-bottom: 8px;
  ${H3};
`;

const Info = styled.p`
  ${BODY2}
  font-weight: 400;
`;

const InfoTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Price = styled.h3`
  position: absolute;
  top: 20%;
  right: 15%;
  ${H2};
  ${Media.LG} {
    position: static;
    display: flex;
    align-self: center;
  }
`;

const QuantityWrapper = styled.div`
  display: flex;
`;

const Quantity = styled.h3`
  display: flex;
  align-self: center;
  margin-inline: 23px;
  ${H3};
`;

const ButtonQuantity = styled.button`
  color: ${Color.PRIMARY};
  background: none;
  border: none;
  padding: 15px;
  cursor: pointer;
`;

const Minus = styled(MinusIcon)`
  width: 25px;
  height: 25px;
  fill: ${Color.PRIMARY};
  :hover,
  :active {
    fill: ${Color.SECONDARY};
  }
`;

const Plus = styled(PlusIcon)`
  width: 20px;
  height: 20px;
  fill: ${Color.PRIMARY};
  :hover,
  :active {
    fill: ${Color.SECONDARY};
  }
`;

export {
  StyledCartCard,
  WrapperImage,
  Image,
  WrapperInfo,
  InfoContainer,
  InfoTitleContainer,
  Price,
  InfoTitle,
  Info,
  CloseWrapper,
  QuantityWrapper,
  Quantity,
  ButtonQuantity,
  Minus,
  Plus,
};

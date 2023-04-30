import styled from "styled-components";
import { motion } from "framer-motion";
import { BODY2, Color, H3, Media } from "ui";

const StyledFavoritesCard = styled(motion.li)`
  position: relative;
  z-index: 1;
  display: flex;
  padding-bottom: 48px;
  border-bottom: 1px solid ${Color.GRAY};
  ${Media.MD} {
    flex-direction: column;
    padding-bottom: 32px;
  }
`;

const Like = styled.div`
  position: absolute;
  top: 20%;
  right: 0;
  ${Media.LG} {
    top: 0;
  }
  ${Media.MD} {
    padding-bottom: 32px;
  }
`;

const WrapperImage = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  padding: 0 46px;
  margin-right: 32px;
  background: ${Color.BLUE};
  ${Media.LG} {
    padding: 0 37px;
  }
  ${Media.MD} {
    padding: 0 49px;
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
  max-width: 164px;
  width: 100%;
  ${Media.MD} {
    max-width: 174px;
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
  margin-bottom: 24px;
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
  ${H3};
`;

export {
  StyledFavoritesCard,
  WrapperImage,
  Image,
  WrapperInfo,
  InfoContainer,
  InfoTitleContainer,
  Price,
  InfoTitle,
  Info,
  Like,
};

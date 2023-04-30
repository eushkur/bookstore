import styled from "styled-components";
import { BODY2, Color, Media } from "ui";

const StyledDetailsBook = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonArrow = styled.button`
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

const WrapperDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 48px;

  ${Media.MD} {
    margin-top: 36px;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 72px;

  ${Media.LG} {
    flex-direction: column;
  }

  ${Media.MD} {
    margin-bottom: 56px;
  }
`;

const WrapperImage = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  width: 50%;
  height: auto;
  padding: 61px 122px;
  background: ${Color.ORANGE};

  ${Media.LG} {
    width: 100%;
    padding: 61px 194px;
    margin-bottom: 48px;
  }

  ${Media.MD} {
    padding: 49px 61px;
    margin-bottom: 36px;
  }
`;

const Image = styled.img`
  max-width: 300px;
  width: 100%;
`;

const Like = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const WrapperInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 40%;
  padding-top: 40px;
  border-top: 1px solid ${Color.GRAY};

  ${Media.LG} {
    width: 100%;
  }
`;

const InfoTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const Price = styled.p`
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${Media.MD} {
    flex-direction: column;
  }
`;

const InfoTitle = styled.p`
  margin-right: 30px;
  line-height: 32px;
  color: ${Color.GRAY};
`;

const Info = styled.p`
  text-align: end;
  line-height: 32px;

  ${Media.MD} {
    text-align: start;
  }
`;

const MoreDetailse = styled.div`
  display: flex;
  align-content: center;
  margin-top: 16px;
  margin-bottom: 40px;

  :disabled {
    color: ${Color.GRAY};
  }
`;

const ChevronButton = styled.button`
  padding: 3px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Preview = styled.a`
  position: relative;
  text-align: center;
  margin-top: 20px;
  ${BODY2};
  font-weight: 400;
  color: ${Color.PRIMARY};
  text-decoration: none;

  ${Media.MD} {
    margin-bottom: 32px;
  }
`;

const DescriptionBar = styled.p`
  ${BODY2}
  font-weight: 400;
  color: ${Color.PRIMARY};
`;

export {
  StyledDetailsBook,
  ButtonArrow,
  WrapperDetails,
  DetailsContainer,
  WrapperImage,
  Image,
  Like,
  WrapperInfo,
  InfoTitleContainer,
  Price,
  InfoContainer,
  InfoTitle,
  Info,
  MoreDetailse,
  ChevronButton,
  Preview,
  DescriptionBar,
};

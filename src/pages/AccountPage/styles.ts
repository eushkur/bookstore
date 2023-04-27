import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, H3, Media } from "ui";

const StyledAccountPage = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: 72px;

  ${Media.LG} {
    position: relative;
  }
  ${Media.MD} {
    margin-block: 56px;
  }
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

const AccountForm = styled.form`
  display: grid;
`;

const SubTitle = styled.h3`
  margin-top: 48px;
  margin-bottom: 16px;
  ${H3};

  ${Media.MD} {
    margin-top: 36px;
  }
`;

const EmailContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;

  ${Media.LG} {
    position: static;
    grid-template-columns: none;
  }
`;

const PasswordContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  margin-bottom: 16px;

  ${Media.LG} {
    grid-template-columns: none;
  }
`;

const NewPasswordContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;

  ${Media.LG} {
    grid-template-columns: none;
    grid-gap: 16px;
  }
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  margin-top: 72px;
  padding-top: 49px;
  border-top: 1px solid ${Color.SECONDARY};

  ${Media.LG} {
    display: block;
  }

  ${Media.MD} {
    margin-top: 56px;
    padding-top: 36px;
  }
`;

const InputError = styled.span`
  color: ${Color.RED};
`;

const Error = styled.p`
  ${H3}
  color: ${Color.RED}
`;

const ButtonWrapper = styled.div`
  grid-column-start: 2;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;

  ${Media.MD} {
    grid-column-start: none;
  }

  ${Media.MD} {
    grid-template-columns: none;
  }
`;

const ButtonCancel = styled.button`
  width: 100%;
  color: ${Color.PRIMARY};
  background: ${Color.WHITE};
  border: 1px solid ${Color.SECONDARY};
  padding: 16px 0;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  cursor: pointer;

  :hover,
  :active {
    background: ${Color.PrimaryLight};
  }

  :disabled {
    background: ${Color.SECONDARY};
  }
`;

const Info = styled(motion.div)`
  position: absolute;
  top: 25px;
  right: 0;
  width: 48.5%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: ${Color.LIGHT};

  ${Media.LG} {
    top: 50px;
    max-width: 60%;
    width: 100%;
    padding: 5px;
  }

  ${Media.MD} {
    top: 0px;
    padding: 3px;
  }
`;

const InfoTitle = styled.h3`
  text-align: center;
  margin-bottom: 16px;
  ${H3};

  ${Media.LG} {
    margin-bottom: 5px;
  }

  ${Media.MD} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;

  ${Media.LG} {
    padding: 5px;
  }

  ${Media.MD} {
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
`;

const TitleDescription = styled.p`
  margin-right: 30px;

  color: ${Color.SECONDARY};

  ${Media.MD} {
    margin-right: 10px;
    font-size: 12px;
  }
`;

const InfoDescription = styled.p`
  text-align: end;

  ${Media.MD} {
    text-align: start;
    font-size: 12px;
  }
`;

export {
  StyledAccountPage,
  ButtonArrow,
  AccountForm,
  SubTitle,
  EmailContainer,
  PasswordContainer,
  NewPasswordContainer,
  ButtonContainer,
  InputError,
  ButtonWrapper,
  ButtonCancel,
  Error,
  Info,
  InfoTitle,
  InfoContainer,
  TitleDescription,
  InfoDescription,
};

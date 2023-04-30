import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, Media, S1 } from "ui";

const StyledSubscription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 56px 64px;
  background: ${Color.PURPLE};

  ${Media.LG} {
    padding: 40px;
  }

  ${Media.MD} {
    padding: 24px;
  }
`;

const Text = styled.p`
  margin-bottom: 32px;
  line-height: 28px;
  color: ${Color.SECONDARY};

  ${Media.MD} {
    margin-bottom: 24px;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;

  ${Media.MD} {
    flex-direction: column;
  }
`;

const Input = styled.input`
  width: 75%;
  padding: 16px 24px;
  border: none;
  outline: none;
  color: ${Color.SECONDARY};
  background: ${Color.WHITE};
  &&::-webkit-outer-spin-button,
  &&::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }

  ${Media.LG} {
    width: 70%;
  }

  ${Media.MD} {
    width: 100%;
  }
`;

const ButtonForm = styled(motion.button)`
  width: 25%;
  color: ${Color.WHITE};
  background: ${Color.PRIMARY};
  border: none;
  padding: 16px 40px;
  ${S1}
  cursor: pointer;

  :hover,
  :active {
    background: ${Color.PRIMARY2};
  }

  :disabled {
    background: ${Color.SECONDARY};
  }

  ${Media.LG} {
    width: 30%;
  }

  ${Media.MD} {
    width: 100%;
    margin-top: 24px;
  }
`;

export { StyledSubscription, Form, ButtonForm, Text, Input };

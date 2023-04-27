import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, H3 } from "ui";

const StyledSignInForm = styled.form`
  display: grid;
  grid-gap: 16px;
`;

const InputError = styled.span`
  color: ${Color.RED};
`;

const ButtonForm = styled(motion.button)`
  width: 100%;
  color: ${Color.WHITE};
  background: ${Color.PRIMARY};
  border: none;
  padding: 16px 0;
  margin-top: 24px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  cursor: pointer;

  :hover,
  :active {
    background: ${Color.PRIMARY2};
  }

  :disabled {
    background: ${Color.SECONDARY};
  }
`;

const Error = styled.p`
  ${H3}
  color: ${Color.RED}
`;

const Text = styled.p`
  color: ${Color.PRIMARY};
`;

export { StyledSignInForm, InputError, ButtonForm, Error, Text };

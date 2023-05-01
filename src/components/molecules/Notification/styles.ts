import styled from "styled-components";
import { motion } from "framer-motion";
import { Color, H3, Media } from "ui";

const StyledNotification = styled(motion.div)`
  position: fixed;
  top: 30%;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10%;
  width: 20%;
  padding: 5px;
  background: ${Color.ORANGE};

  ${Media.LG} {
    width: 30%;
  }

  ${Media.MD} {
    width: 60%;
  }
`;

const Message = styled.h3`
  text-align: center;
  ${H3}
  color: ${Color.PRIMARY2};
`;

export { StyledNotification, Message };

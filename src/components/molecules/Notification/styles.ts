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
  height: 15%;
  width: 30%;
  padding: 5px;
  background: ${Color.GREEN};

  ${Media.LG} {
    width: 40%;
  }

  ${Media.MD} {
    width: 80%;
  }
`;

const Message = styled.h3`
  text-align: center;
  ${H3}
  color: ${Color.PRIMARY2};
`;

export { StyledNotification, Message };

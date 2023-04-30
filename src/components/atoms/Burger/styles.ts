import { motion } from "framer-motion";
import styled from "styled-components";
import { Color, H3, Media } from "ui";

const StyledBurgerMenu = styled(motion.div)`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(2px);
`;

const WrapperContent = styled.div`
  display: grid;
  align-content: start;
  grid-gap: 10%;
  grid-template-rows: repeat(auto-fill, 1fr);
  width: 50%;
  height: inherit;
  margin-left: auto;
  padding-inline: 40px;
  background: ${Color.LIGHT};
  box-shadow: 1px 1px 15px ${Color.GRAY};
  ${Media.MD} {
    width: 100%;
  }
`;

const BurgerHeader = styled.div`
  display: flex;
  justify-content: end;
  padding-block: 35px;
  border-bottom: 1px solid ${Color.SECONDARY};
  ${Media.LG} {
    width: 100%;
  }
`;

const Description = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
`;

const Error = styled.p`
  ${H3}
  color: ${Color.RED}
`;

export { StyledBurgerMenu, WrapperContent, BurgerHeader, Description, Error };

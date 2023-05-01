import styled from "styled-components";
import { Media } from "./media";

const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: auto;

  ${Media.LG} {
    padding-inline: 40px;
  }

  ${Media.MD} {
    padding-inline: 24px;
  }
`;

export { Container };

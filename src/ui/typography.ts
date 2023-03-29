import { css } from "styled-components";
import { Media } from "./media";

const H1 = css`
  font-weight: 700;
  font-size: 56px;
  line-height: 64px;
  ${Media.MD} {
    font-size: 32px;
    line-height: 44px;
  }
`;

const H2 = css`
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  ${Media.MD} {
    font-size: 28px;
    line-height: 40px;
  }
`;

const H3 = css`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`;

const S1 = css`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
`;

const BODY = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
`;

const BODY2 = css`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

export { H1, H2, H3, S1, BODY, BODY2 };

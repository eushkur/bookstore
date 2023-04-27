import styled from "styled-components";
import { Color, Media } from "ui";

const StyledRegistration = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: 100%;
  padding: 0 32px 40px;
  margin: 196px auto 205px;
  border: 2px solid ${Color.SECONDARY};

  ${Media.MD} {
    margin: 170px auto;
  }

  ${Media.MD} {
    margin: 56px auto;
    border: none;
    padding: 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 32px;
`;

const Button = styled.button`
  width: 100%;
  padding: 26px 90px 22px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  color: inherit;
  background: none;
  border: none;
  cursor: pointer;

  ${Media.MD} {
    padding: 0 38px 18px;
  }
`;

export { StyledRegistration, ButtonWrapper, Button };

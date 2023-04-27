import { ReactNode, MouseEvent } from "react";
import { StyledButton } from "./styles";

interface Props {
  type: "button" | "submit" | "reset";
  value: string;
  onClick?: (() => void) | ((event: MouseEvent<HTMLElement>) => void);
  children?: ReactNode;
  disabled?: boolean;
}

export const Button = ({ type = "button", value, onClick, children, disabled }: Props) => {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled} whileTap={{ scale: 1.1 }}>
      {value} {children}
    </StyledButton>
  );
};

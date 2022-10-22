import styled from "styled-components";
import { IButton } from "../../interface/common";

const StyledButton = styled.button``;

const Button = ({ children }: IButton) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;

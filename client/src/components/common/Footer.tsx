import styled from "styled-components";
import { IFooterProps } from "../../interface/common";

const StyledFooter = styled.footer``;

const Footer = ({ children }: IFooterProps) => {
  return <StyledFooter>{children}</StyledFooter>;
};

export default Footer;

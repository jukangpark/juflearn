import styled from "styled-components";

const StyledFooter = styled.footer``;

interface IFooterProps {
  children: string;
}

const Footer = ({ children }: IFooterProps) => {
  return <StyledFooter>{children}</StyledFooter>;
};

export default Footer;

import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  > div {
    display: flex;
    max-width: 1200px;
  }
  > div > a {
    width: 80px;
    line-height: 60px;
  }

  height: 100px;
`;

/** 공통적인 헤더 영역 */
const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Link to="/profile">프로필</Link>
        <form placeholder="search" />
        <Link to="/login">로그인</Link>
        <Link to="/join">회원가입</Link>
      </div>
    </StyledHeader>
  );
};

export default Header;

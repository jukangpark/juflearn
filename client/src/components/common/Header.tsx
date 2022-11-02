import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { toggleTheme } from "../../redux/theme/themeAction";

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  border: 0.5px solid gray;
  box-sizing: border-box;

  > div {
    display: flex;
    max-width: 1200px;
  }

  > div > a {
    width: 80px;
    line-height: 60px;
  }
`;

interface ITheme {
  theme: boolean;
}

/** 공통적인 헤더 영역 */
const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector<ITheme>((state) => state.theme);

  useEffect(() => {
    console.log(theme);
  }, []);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <StyledHeader>
      <div>
        <Link to="/">LOGO</Link>
        <Link to="/profile">프로필</Link>
        <form placeholder="search" />
        <Link to="/login">로그인</Link>
        <Link to="/join">회원가입</Link>
        <button onClick={handleToggleTheme}>
          {theme ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </StyledHeader>
  );
};

export default Header;

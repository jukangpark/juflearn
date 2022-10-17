import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header>Header 영역</header>
      <h1>이곳은 홈페이지 입니다.</h1>
      <Link to="/join">회원가입</Link>
      <Link to="/login">로그인</Link>
      <footer>footer 영역</footer>
    </div>
  );
};

export default Home;

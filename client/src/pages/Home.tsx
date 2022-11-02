import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>이곳은 홈페이지 입니다.</h1>
      <Link to="/login">로그인</Link>
    </div>
  );
};

export default Home;

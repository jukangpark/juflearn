import { Outlet } from "react-router";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer>푸터 영역</Footer>
    </div>
  );
};

export default Layout;

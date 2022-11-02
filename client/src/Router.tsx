import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Page404 from "./pages/404/Page404";
import Join from "./pages/auth/Join";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

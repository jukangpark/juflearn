import { BrowserRouter, Route, Routes } from "react-router-dom";
import Join from "./pages/auth/Join";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

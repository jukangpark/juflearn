"use client";

import Navigation from "./Navigation";
import navigationItems from "../data/navigationItems";

const Header = () => {
  return (
    <header>
      <Navigation navigationItems={navigationItems} />
    </header>
  );
};

export default Header;

// 레이아웃은 모든 페이지에서 공통적으로 사용되는 요소를 포함하고, 페이지는 레이아웃 내에서 렌더링 된다.
// 따라서, Header 컴포넌트를 레이아웃에 포함시키면 모든 페이지에서 Header 가 동일한 인스턴스로 유지되며,
// 이전 페이지에서의 상태를 유지할 수 있다.

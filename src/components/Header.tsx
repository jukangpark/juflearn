"use client";

import Navigation from "./Navigation";
import navigationData from "../data/navigation";

const Header = () => {
  return (
    <header>
      <Navigation items={navigationData} />
    </header>
  );
};

export default Header;

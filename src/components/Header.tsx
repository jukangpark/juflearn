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

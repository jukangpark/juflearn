"use client";

import Navigation from "./Navigation";
import navigationData from "../data/navigation";
import { RecoilRoot } from "recoil";

const Header = () => {
  return (
    <RecoilRoot>
      <header>
        <Navigation items={navigationData} />
      </header>
    </RecoilRoot>
  );
};

export default Header;

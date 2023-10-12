"use client";

import Link from "next/link";
import Logo from "./Logo";
import ToggleThemeButton from "./ToggleThemeButton";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

interface NavigationItem {
  id: number;
  url: string;
  text: string;
}

export interface NavigationProps {
  navigationItems: NavigationItem[];
}

const Navigation = ({ navigationItems }: NavigationProps) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex">
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md"
                onClick={toggleMenu}
              >
                <FaBars className="h-6 w-6" />
              </button>
            </div>
            <div className="flex items-center ml-3">
              <Logo />
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigationItems.map((item) => (
                <Link key={item.id} href={item.url}>
                  <div className="px-3 py-2 rounded-md text-sm">
                    {item.text}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <ToggleThemeButton />
          </div>
        </div>
      </div>
      {showMenu && <MobileMenu />}
    </nav>
  );
};

export default Navigation;

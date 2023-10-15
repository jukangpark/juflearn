"use client";

import Link from "next/link";
import Logo from "./Logo";
import ToggleThemeButton from "./ToggleThemeButton";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import { signOut, useSession } from "next-auth/react";

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
  const { data: session, status } = useSession();

  const isLoading = status === "loading";

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 leading-10">
        <div className="flex justify-between">
          <div className="flex">
            <div className="-mr-2 flex items-center sm:hidden">
              <button
                className="inline-flex items-center rounded-md"
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
                  <div className="rounded-md text-sm leading-10">
                    {item.text}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            {!isLoading && session ? (
              <button
                className="rounded-md text-sm leading-10"
                onClick={() => {
                  signOut();
                }}
              >
                로그아웃
              </button>
            ) : (
              !isLoading && (
                <Link href="/login" className="rounded-md text-sm">
                  로그인
                </Link>
              )
            )}
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

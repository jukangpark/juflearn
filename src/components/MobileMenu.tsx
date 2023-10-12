"use client";

import Link from "next/link";
import navigationItems from "@/data/navigationItems";

const MobileMenu = () => {
  return (
    <ul className="flex flex-col text-left">
      {navigationItems.map((item) => (
        <li key={item.id} className="my-4">
          <Link href={item.url}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileMenu;

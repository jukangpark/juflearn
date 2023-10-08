"use client";

// useState 는 only works in a client component 에서만 사용할 수 있기 때문에 use client 를 사용합니다.
import Link from "next/link";
import Logo from "./Logo";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "@/atom/isDarkAtom";

// interface 는 타입스크립트에서 타입을 정의하는 방법 중 하나입니다.
// interface 를 사용하면 객체의 타입을 정의할 수 있습니다.
// 아래 코드에서는 NavigationProps 라는 이름의 인터페이스를 정의했습니다.

interface NavigationItem {
  id: number;
  url: string;
  text: string;
}

interface NavigationProps {
  items: NavigationItem[];
}

const Navigation = ({ items }: NavigationProps) => {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  // mx-auto 는 margin-left 와 margin-right 를 auto 로 설정합니다.
  // 가운데 배치 시키기 위해 사용합니다.
  // max-w-screen-xl 은 최대 너비를 1280px 로 설정합니다.
  return (
    <nav
      className={`max-w-screen-xl mx-auto ${
        isDark ? "black text-white" : "bg-white text-black"
      }`}
    >
      <ul className="flex items-center justify-between px-4 py-3 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <li>
          <Logo />
        </li>
        <li>
          <ul className="flex items-center sm:ml-6 md:ml-8 lg:ml-10 xl:ml-12">
            {items.map((item) => (
              <li key={item.id} className="ml-4">
                <Link href={item.url}>{item.text}</Link>
              </li>
            ))}
            <li className="ml-4">
              <button
                onClick={() => {
                  setIsDark(!isDark);
                }}
              >
                Toggle Theme
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

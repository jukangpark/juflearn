"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface ProfileProps {
  user: any;
}

const Profile = ({ user }: ProfileProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDropDown = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <button onClick={handleDropDown}>
            <img src={user.image} alt="user_profile" />
          </button>
        </div>
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-12 right-0 z-10 w-40 text-white"
          >
            <ul>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/dashboard#courses">My Courses</Link>
              </li>
              <li>
                <button onClick={() => signOut()}>Sign out</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

// 닉네임 필수 동의
// 프로필 사진 선택 동의
// 카카오 계정 (이메일) 선택 동의

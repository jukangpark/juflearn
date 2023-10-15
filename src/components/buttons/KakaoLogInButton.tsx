"use client";

import { signIn } from "next-auth/react";

const KakaoLogInButton = () => {
  return (
    <button
      type="submit"
      onClick={() => signIn("kakao", { callbackUrl: "/" })}
      className="bg-kakao-background-color py-2 px-4 rounded-md flex items-center text-kakao-text-color"
    >
      카카오 로그인
    </button>
  );
};

export default KakaoLogInButton;

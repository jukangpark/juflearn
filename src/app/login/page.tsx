"use client";

import KakaoLogInButton from "@/components/buttons/KakaoLogInButton";

const LogInPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to Code King Academy
          </h2>
          <h3 className="text-center mt-3">
            Code Like a <span className="font-bold">KING</span>
          </h3>
        </div>
        <div className="flex justify-center">
          <KakaoLogInButton />
        </div>
      </div>
    </div>
  );
};

export default LogInPage;

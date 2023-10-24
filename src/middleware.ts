import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
  });

  if (!token) {
    // 토큰이 존재하지 않는 경우
    // 참조 : https://next-auth.js.org/tutorials/securing-pages-and-api-routes#using-gettoken
    return NextResponse.redirect(new URL("/", req.url));
  }

  // NEXT.js 미들웨어에서 NextResponse.next() 를 호출하지 않아도 미들웨어가 실행되면서, 다음 처리 단계로 넘어갑니다.
  // 그러나 좋은 개발 습관과 코드의 명확성을 위해 NextResponse.next() 를 호출하는 것을 권장합니다.
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/dashboard/myCourses"],
};

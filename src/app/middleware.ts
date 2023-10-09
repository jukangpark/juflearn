import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  console.log("Middleware called");
  // NEXT.js 미들웨어에서 NextResponse.next() 를 호출하지 않아도 미들웨어가 실행되면서, 다음 처리 단계로 넘어갑니다.
  // 그러나 좋은 개발 습관과 코드의 명확성을 위해 NextResponse.next() 를 호출하는 것을 권장합니다.
  // return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};

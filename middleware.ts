// just an example of middleware in Next.js app

import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request);

  return NextResponse.next();
}

export const config = {
  matcher: "/news",
};

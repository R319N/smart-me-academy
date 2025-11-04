import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Example: redirect to home if page not found
  if (url.pathname.startsWith("/404")) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
}

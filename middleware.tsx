import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isEdgeAuthenticated } from "./lib/auth-edge";

export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!isEdgeAuthenticated(request)) {
      const url = request.nextUrl.clone();
      url.pathname = "/";
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
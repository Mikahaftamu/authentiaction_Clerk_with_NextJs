import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims } = await auth();

  const role = sessionClaims?.metadata?.role;
  const pathname = req.nextUrl.pathname;

  // If user is NOT logged in and is trying to access a protected route, redirect to "/"
  if (!userId && (pathname.startsWith("/dashboard") || pathname.startsWith("/admin"))) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // If user is logged in and is on "/", redirect based on role
  if (userId && pathname === "/") {
    if (role === "admin") {
      return NextResponse.redirect(new URL("/admin", req.url));
    } else {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  return NextResponse.next(); // Allow normal page rendering
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"], // Applies middleware to all routes except static files
};

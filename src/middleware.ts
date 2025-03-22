import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims } = await auth();
  const role = sessionClaims?.metadata?.role;
  const pathname = req.nextUrl.pathname;

  // If user is NOT logged in and tries to access protected routes, redirect to "/"
  if (!userId && (pathname.startsWith("/dashboard") || pathname.startsWith("/admin"))) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Redirect logged-in users from "/" to their respective pages
  if (userId && pathname === "/") {
    return NextResponse.redirect(new URL(role === "admin" ? "/admin" : "/dashboard", req.url));
  }

  // Protect /admin route: Only allow users with role "admin"
  if (pathname.startsWith("/admin") && role !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", req.url)); // Redirect non-admins to dashboard
  }

  // Protect /dashboard route: Only allow regular users (not admins)
  if (pathname.startsWith("/dashboard") && role === "admin") {
    return NextResponse.redirect(new URL("/admin", req.url)); // Redirect admins to admin panel
  }

  return NextResponse.next(); // Allow normal page rendering
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"], // Applies middleware to all routes except static files
};

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims, redirectToSignIn } = await auth();

  if (!userId) {
    return redirectToSignIn();
  }

  const role = sessionClaims?.metadata?.role;
  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL(role === "admin" ? "/admin" : "/dashboard", req.url));
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};

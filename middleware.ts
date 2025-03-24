import { authMiddleware } from "@clerk/nextjs";

const middleware = authMiddleware({
  publicRoutes: [
    "/",
    "/sign-in",
    "/sign-up",
    "/api/(.*)",
    "/property/(.*)",
    "/_next/(.*)",
    "/images/(.*)"
  ],
  ignoredRoutes: [
    "/api/(.*)",
    "/_next/(.*)",
    "/static/(.*)"
  ],
  debug: true
});

export default middleware;

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/"
  ]
};

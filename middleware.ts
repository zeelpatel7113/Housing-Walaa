import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/sign-in",
    "/sign-up",
    "/api/webhook",
    "/api/user/details",
    "/api/test-email",
    "/property/(.*)",  // Allow access to property pages without auth
    "/_next/(.*)",     // Allow access to Next.js resources
    "/images/(.*)",    // Allow access to images
    "/api/(.*)"        // Allow access to all API routes
  ],
  ignoredRoutes: [
    "/api/webhook",
    "/_next/(.*)",
    "/favicon.ico",
    "/api/(.*)"
  ]
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/"
  ]
};

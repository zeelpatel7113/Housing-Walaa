import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/sign-in", "/sign-up"], // Authentication pages and home page are accessible without authentication
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], // Ensures middleware runs for all non-static files
};

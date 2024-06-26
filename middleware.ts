import createMiddleware from "next-intl/middleware";
import { locales, pathnames /* ... */ } from "./config";

export default createMiddleware({
  locales,
  pathnames,
  // ...

  // Used when no locale matches
  defaultLocale: "tr",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(tr|en)/:path*"],
};

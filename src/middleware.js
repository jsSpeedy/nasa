import createMiddleware from "next-intl/middleware";
import { pathnames } from "./config";

export default createMiddleware({
  locales: ["en", "tr"],
  defaultLocale: "tr",
  pathnames,
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};

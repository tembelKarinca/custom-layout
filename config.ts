import { LocalePrefix, Pathnames } from "next-intl/routing";

export const locales = ["en", "tr"] as const;

export const localePrefix = {
  mode: "always",
} satisfies LocalePrefix<typeof locales>;

export const pathnames = {
  "/": {
    en: "/",
    tr: "/",
  },
  "/about": {
    en: "/about",
    tr: "/hakkimda",
  },
} satisfies Pathnames<typeof locales>;

"use client";
import * as React from "react";

import styles from "./Locale.module.scss";

import { useLocale } from "next-intl";
import { usePathname } from "@/navigation";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const handleChange = (selectedLocale: string) => {
    window.location.href = `/${selectedLocale}${pathname}`;
  };

  return (
    <div className={styles.locale_switcher}>
      <button
        className={locale === "en" ? styles.active_lang : ""}
        onClick={() => handleChange("en")}
      >
        ENG
      </button>
      {" | "}
      <button
        className={locale === "tr" ? styles.active_lang : ""}
        onClick={() => handleChange("tr")}
      >
        TR
      </button>
    </div>
  );
}

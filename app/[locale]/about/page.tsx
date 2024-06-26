import { useTranslations } from "next-intl";
import React from "react";
import styles from "./About.module.scss";

export default function About() {
  const t = useTranslations("about");
  return (
    <div className={styles.container}>
      <p>{t("title")}</p>
    </div>
  );
}

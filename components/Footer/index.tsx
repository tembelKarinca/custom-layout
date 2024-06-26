import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  const t = useTranslations("common");
  return (
    <footer className={styles.footer}>
      <div className={styles.menu}>
        <ul>
          <li>
            <Link href="/">
              <Image
                alt=""
                width={146}
                height={25}
                src="/tembel-karinca-logo.svg"
              />
            </Link>
          </li>
          <li>
            <Link href={"/"}>{t("homepage")}</Link>
          </li>
          <li>
            <Link href={"/about"}>{t("about")}</Link>
          </li>
        </ul>
      </div>
      <div className={styles.copyright}>{t("copyright")}</div>
    </footer>
  );
}

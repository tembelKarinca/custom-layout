import Image from "next/image";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  return (
    <main className={styles.main}>
      <p>{t("title")}</p>
    </main>
  );
}

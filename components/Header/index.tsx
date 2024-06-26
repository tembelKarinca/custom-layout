"use client";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import styles from "./Header.module.scss";
import classnames from "classnames";
import Image from "next/image";
import { LocaleSwitcher } from "./LocaleSwitcher";

export default function Header() {
  const t = useTranslations("common");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <header className={styles.header}>
      <Link className={styles.mobile_logo} href="/" onClick={closeMenu}>
        <Image alt="" width={141} height={43} src="/tembel-karinca-logo.svg" />
      </Link>
      <div
        className={classnames(styles.hamburgerIcon, {
          [styles.open]: isOpen,
        })}
        onClick={toggleMenu}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <nav className={classnames(styles.mainMenu, { [styles.open]: isOpen })}>
        <ul>
          <li>
            <Link href="/" onClick={closeMenu}>
              <Image
                alt=""
                width={146}
                height={25}
                src="/tembel-karinca-logo.svg"
              />
            </Link>
          </li>
          <li>
            <Link href={"/"} onClick={closeMenu}>
              {t("homepage")}
            </Link>
          </li>
          <li>
            <Link href={"/about"}>{t("about")}</Link>
          </li>
          <li className={styles.hasSubMenu}>
            {"Dropdown"}
            <ul className={styles.subMenu}>
              <li>{"Dropdown Sub1"}</li>
              <li>{"Dropdown Sub2"}</li>
              <li>{"Dropdown Sub3"}</li>
            </ul>
          </li>
          <li>
            <LocaleSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  );
}

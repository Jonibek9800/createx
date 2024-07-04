import { navLinks } from "../model";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import i18n from "../../../i18n";
import { useState } from "react";

export default function Navigation() {
  const [lang, setLang] = useState(i18n.language);
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const changeLang = (e: any) => {
    const lang = e.target.value;
    setLang(lang);
    changeLanguage(lang.toLowerCase());
  };
  return (
    <div className={styles.navigation}>
      {navLinks.map((nav) => (
        <NavLink className={styles.nav_link} key={nav.id} to={nav.link}>
          {nav.lable}
        </NavLink>
      ))}
      <select onChange={changeLang} value={lang} className={styles.lang}>
        <option value="RU">RU</option>
        <option value="EN">EN</option>
      </select>
    </div>
  );
}

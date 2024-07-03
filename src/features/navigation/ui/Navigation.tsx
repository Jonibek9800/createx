import { navLinks } from "../model";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      {navLinks.map((nav) => (
        <NavLink className={styles.nav_link} key={nav.id} to={nav.link}>
          {nav.lable}
        </NavLink>
      ))}
    </div>
  );
}

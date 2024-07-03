import { NavLink } from "react-router-dom";
import { Contact } from "../../features/contact";
import { Navigation } from "../../features/navigation";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_logo}>
        <NavLink className={styles.header_nav} to="/">
          <img src="/img/logo.svg" alt="" width={130} />
        </NavLink>
      </div>
      <div className={styles.header_nav}>
        <Navigation />
      </div>
      <div className={styles.header_contact}>
        <Contact icon="/img/iPhone.png" title="Call us" path="(405) 555-0128" />
        <Contact
          icon="/img/Chat.png"
          title="Talk to us"
          path="hello@createx.com"
        />
      </div>
    </div>
  );
};

export default Header;

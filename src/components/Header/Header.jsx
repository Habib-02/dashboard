import styles from "./Header.module.css";

import { Menu } from "lucide-react";

import VisuallyHidden from "../VisuallyHidden";
import LanguageSelect from "./LanguageSelect";
import Notification from "./Notification";
import User from "./User";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className={styles.header}>
      <div className="menu">
        <Menu className={styles.menuIcon} />
        <VisuallyHidden>Menu Button</VisuallyHidden>
      </div>
      <div className={styles.searchBar}>
        <SearchBar className={styles.searchBar} />
      </div>
      <Notification />
      <LanguageSelect />
      <User />
    </header>
  );
}

export default Header;

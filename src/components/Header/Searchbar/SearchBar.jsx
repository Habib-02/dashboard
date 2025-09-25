import { Search } from "lucide-react";
import styles from "./SearchBar.module.css";

console.log(styles);

function SearchBar() {
  return (
    <form className={styles.form}>
      <div className={styles.searchGroup}>
        <input type="text" placeholder="Search" />
        <Search className={styles.searchIcon} />
      </div>
    </form>
  );
}

export default SearchBar;

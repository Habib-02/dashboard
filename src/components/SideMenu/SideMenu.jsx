import styles from "./SideMenu.module.css";

function SideMenu() {
  return (
    <aside className={styles.sideMenu}>
      <div className={styles.logo}>
        <h1>
          <span>Dash</span>
          <span>Stack</span>
        </h1>
      </div>
      <nav className={styles.sideNav}>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="">
              Dashboard
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="">
              Products
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="">
              Favorites
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="">
              Inbox
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="">
              Order Lists
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="">
              Products Stock
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideMenu;

import styles from "./SideMenu.module.css";

import { LayoutDashboard } from "lucide-react";
import { ShoppingBasket } from "lucide-react";
import { Heart } from "lucide-react";
import { List } from "lucide-react";
import { Mails } from "lucide-react";
import { Warehouse } from "lucide-react";

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
              <LayoutDashboard className={styles.icon} />
              <span>Dashboard</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="">
              <ShoppingBasket />
              <span> Products</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="">
              <Heart />
              <span>Favorites</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="">
              <Mails />
              <span>Inbox</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="">
              <List />
              <span>Order Lists</span>
            </a>
          </li>
          <li className={styles.navItem}>
            <a className={styles.navLink} href="">
              <Warehouse />
              <span>Products Stock</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideMenu;

import styles from "./User.module.css";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";

function User() {
  return (
    <div className={styles.user}>
      <div className={styles.avatar}>
        <div className={styles.avatarImage}>
          <img src="/avatar.png" alt="User Avatar" />
        </div>
        <div className={styles.avatarName}>
          <h3>Habibur Rahman</h3>
          <h5>Admin</h5>
        </div>
      </div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className={styles.trigger}>
          <ChevronDown className={styles.chevronDown} />
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className={styles.content}>
            <DropdownMenu.Item className={styles.item}>
              Your Account functionalities
            </DropdownMenu.Item>
            <DropdownMenu.Item className={styles.item}>
              Your Account functionalities
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}

export default User;

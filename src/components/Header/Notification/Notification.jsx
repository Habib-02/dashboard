import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import styles from "./Notification.module.css";

import { Bell } from "lucide-react";

function Notification() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={styles.trigger}>
        <Bell className={styles.bellIcon} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={styles.content}>
          <DropdownMenu.Item className={styles.item}>
            System Update Available
          </DropdownMenu.Item>
          <DropdownMenu.Item className={styles.item}>
            New Message Received
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default Notification;

import styles from "./LanguageSelect.module.css";
import * as Select from "@radix-ui/react-select";

import { ChevronDown } from "lucide-react";

function LanguageSelect() {
  return (
    <Select.Root defaultValue="english">
      <Select.Trigger className={styles.trigger}>
        <Select.Value placeholder="Select language" />
        <Select.Icon>
          <ChevronDown className={styles.chevron} />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className={styles.content}>
          <Select.Viewport className={styles.viewport}>
            <Select.Item value="english" className={styles.item}>
              <Select.ItemText>English</Select.ItemText>
            </Select.Item>

            <Select.Item value="bangla" className={styles.item}>
              <Select.ItemText>বাংলা</Select.ItemText>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

export default LanguageSelect;

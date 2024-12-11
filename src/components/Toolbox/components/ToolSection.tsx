import { memo } from "react";

import styles from "../index.module.css";

export const ToolSection = memo(
  ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className={styles.toolItem}>
      <h4 className={styles.toolText}>{title}</h4>
      {children}
    </div>
  )
);
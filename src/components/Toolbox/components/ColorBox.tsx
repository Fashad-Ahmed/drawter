import { memo } from "react";

import styles from "../index.module.css";

export const ColorBox = memo(
  ({ color, onClick }: { color: string; onClick: (color: string) => void }) => (
    <div
      className={styles.colorBox}
      style={{ backgroundColor: color }}
      onClick={() => onClick(color)}
    />
  )
);

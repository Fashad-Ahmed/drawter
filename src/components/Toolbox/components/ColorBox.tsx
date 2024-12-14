import { memo } from "react";

import styles from "../index.module.css";

// eslint-disable-next-line react/display-name
export const ColorBox = memo(
  ({ color, onClick }: { color: string; onClick: (color: string) => void }) => (
    <div
      className={styles.colorBox}
      style={{ backgroundColor: color }}
      onClick={() => onClick(color)}
    />
  )
);

import { memo } from "react";
import cx from "classnames";

import styles from "../index.module.css";

// eslint-disable-next-line react/display-name
export const ColorBox = memo(
  ({
    color,
    isActiveColor,
    onClick,
  }: {
    color: string;
    isActiveColor: boolean;
    onClick: (color: string) => void;
  }) => (
    <div
      className={cx(styles.colorBox, {
        [styles.active]: isActiveColor,
      })}
      style={{ backgroundColor: color }}
      onClick={() => onClick(color)}
    />
  )
);

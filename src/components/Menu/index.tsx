import React, { memo, useMemo } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEraser,
  faFileArrowDown,
  faPencil,
  faRotateLeft,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

const ICON_ITEMS = [
  { icon: faPencil, label: "Edit" },
  { icon: faEraser, label: "Erase" },
  { icon: faRotateLeft, label: "Rotate Left" },
  { icon: faRotateRight, label: "Rotate Right" },
  { icon: faFileArrowDown, label: "Download" },
];

const Menu = () => {
  const icons = useMemo(() => ICON_ITEMS, []);

  return (
    <div className={styles.menuContainer} aria-label="Menu">
      {icons.map(({ icon, label }) => (
        <button
          key={label}
          className={styles.iconWrapper}
          aria-label={label}
          type="button"
        >
          <FontAwesomeIcon icon={icon} className={styles.icon} />
        </button>
      ))}
    </div>
  );
};

export default memo(Menu);

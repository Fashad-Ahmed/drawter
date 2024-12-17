import React, { memo, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEraser,
  faFileArrowDown,
  faPencil,
  faRotateLeft,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import cx from "classnames";

import { useActiveMenuItem, useMenuStore } from "@/store/menuStore";

import styles from "./index.module.css";
import { MENU_ITEMS } from "@/utils/enums";

const ICON_ITEMS = [
  { icon: faPencil, label: "Edit" },
  { icon: faEraser, label: "Erase" },
  { icon: faRotateLeft, label: "Rotate Left" },
  { icon: faRotateRight, label: "Rotate Right" },
  { icon: faFileArrowDown, label: "Download" },
];

const Menu = () => {
  const activeMenuItem = useActiveMenuItem();
  const actionItemClick = useMenuStore((state) => state.actionItemClick);
  const menuItemClick = useMenuStore((state) => state.menuItemClick);

  const icons = useMemo(() => ICON_ITEMS, []);

  const handleMenuClick = (itemName: string) => {
    menuItemClick(itemName);
  };

  const handleActioItemClick = (itemName: string | null) => {
    actionItemClick(itemName);
  };
  //  cluttered code need refactoring

  return (
    <div className={styles.menuContainer}>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.PENCIL,
        })}
        onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}
      >
        <FontAwesomeIcon icon={faPencil} className={styles.icon} />
      </div>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.ERASER,
        })}
        onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}
      >
        <FontAwesomeIcon icon={faEraser} className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActioItemClick(MENU_ITEMS.UNDO)}
      >
        <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActioItemClick(MENU_ITEMS.REDO)}
      >
        <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActioItemClick(MENU_ITEMS.DOWNLOAD)}
      >
        <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />
      </div>
    </div>
  );
};

// return (
//   <div className={styles.menuContainer} aria-label="Menu">
//     {icons.map(({ icon, label }) => (
//       <button
//         key={label}
//         className={styles.iconWrapper}
//         aria-label={label}
//         type="button"
//       >
//         <FontAwesomeIcon icon={icon} className={styles.icon} />
//       </button>
//     ))}
//   </div>
// );
export default memo(Menu);

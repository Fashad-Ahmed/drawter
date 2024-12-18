import React, { memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import cx from "classnames";

import { useActiveMenuItem, useMenuStore } from "@/store/menuStore";
import { MENU_ITEMS } from "@/utils/enums";

import styles from "./index.module.css";

const Menu = () => {
  const activeMenuItem = useActiveMenuItem();
  const { menuItemClick, actionItemClick } = useMenuStore((state) => ({
    menuItemClick: state.menuItemClick,
    actionItemClick: state.actionItemClick,
  }));

  const handleClick = (item: (typeof ICON_ITEMS)[number]) => {
    item.isAction
      ? actionItemClick(item.menuItem)
      : menuItemClick(item.menuItem);
  };

  return (
    <div className={styles.menuContainer}>
      {ICON_ITEMS.map((item) => (
        <div
          key={item.label}
          className={cx(styles.iconWrapper, {
            [styles.active]: !item.isAction && activeMenuItem === item.menuItem,
          })}
          onClick={() => handleClick(item)}
        >
          <FontAwesomeIcon
            icon={item.icon as IconProp}
            className={styles.icon}
          />
        </div>
      ))}
    </div>
  );
};

const ICON_ITEMS = [
  {
    icon: "faPencil",
    label: "Edit",
    menuItem: MENU_ITEMS.PENCIL,
    isAction: false,
  },
  {
    icon: "faEraser",
    label: "Erase",
    menuItem: MENU_ITEMS.ERASER,
    isAction: false,
  },
  {
    icon: "faRotateLeft",
    label: "Undo",
    menuItem: MENU_ITEMS.UNDO,
    isAction: true,
  },
  {
    icon: "faRotateRight",
    label: "Redo",
    menuItem: MENU_ITEMS.REDO,
    isAction: true,
  },
  {
    icon: "faFileArrowDown",
    label: "Download",
    menuItem: MENU_ITEMS.DOWNLOAD,
    isAction: true,
  },
];

export default memo(Menu);

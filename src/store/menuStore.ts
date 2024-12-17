import { create } from "zustand";

import { MENU_ITEMS } from "@/utils/enums";
import { MenuActions, MenuState } from "@/utils/types/menu.type";

type MenuStore = MenuState & MenuActions;

export const useMenuStore = create<MenuStore>((set) => ({
  activeMenuItem: MENU_ITEMS.PENCIL,
  actionMenuItem: null,
  menuItemClick: (menuItem) => set({ activeMenuItem: menuItem }),
  actionItemClick: (actionItem) => set({ actionMenuItem: actionItem }),
}));

export const useActiveMenuItem = () =>
  useMenuStore((state) => state.activeMenuItem);

export const useActionMenuItem = () =>
  useMenuStore((state) => state.actionMenuItem);

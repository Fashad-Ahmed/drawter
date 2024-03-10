import { MENU_ITEMS } from "@/utils/enums";
import create from "zustand";

interface MenuState {
  activeMenuItem: string;
  actionMenuItem: string | null;
}

interface MenuActions {
  menuItemClick: (menuItem: string) => void;
  actionItemClick: (actionItem: string | null) => void;
}

export const useMenuStore = create<MenuState & MenuActions>((set) => ({
  activeMenuItem: MENU_ITEMS.PENCIL,
  actionMenuItem: null,
  menuItemClick: (menuItem) => set({ activeMenuItem: menuItem }),
  actionItemClick: (actionItem) => set({ actionMenuItem: actionItem }),
}));

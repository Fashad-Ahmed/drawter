import create from "zustand";

import { COLORS, MENU_ITEMS } from "@/utils/enums";

interface ToolboxState {
  [MENU_ITEMS.PENCIL]: {
    color: string;
    size: number;
  };
  [MENU_ITEMS.ERASER]: {
    color: string;
    size: number;
  };
  [MENU_ITEMS.UNDO]: {};
  [MENU_ITEMS.REDO]: {};
  [MENU_ITEMS.DOWNLOAD]: {};
}

interface ToolboxActions {
  changeColor: any;
  changeBrushSize: any;
}

export const useToolboxStore = create<ToolboxState & ToolboxActions>((set) => ({
  [MENU_ITEMS.PENCIL]: {
    color: COLORS.Black,
    size: 3,
  },
  [MENU_ITEMS.ERASER]: {
    color: COLORS.White,
    size: 3,
  },
  [MENU_ITEMS.UNDO]: {},
  [MENU_ITEMS.REDO]: {},
  [MENU_ITEMS.DOWNLOAD]: {},
  changeColor: (item: string | number, color: any) =>
    set((state: any) => (state[item].color = color)),
  changeBrushSize: (item: string | number, size: any) =>
    set((state: any) => (state[item].size = size)),
}));

export const useChangeColor = (activeMenuItem: string) =>
  useToolboxStore((state) => state.changeColor[activeMenuItem]);

export const useChangeBrushSize = (activeMenuItem: string) =>
  useToolboxStore((state) => state.changeBrushSize[activeMenuItem]);

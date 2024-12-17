import { create } from "zustand";

import { COLORS, MENU_ITEMS } from "@/utils/enums";
import { ToolboxActions, ToolboxState } from "@/utils/types/toolBox.type";


type ToolBoxStore = ToolboxState & ToolboxActions;

export const useToolboxStore = create<ToolBoxStore>((set) => ({
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
  changeColor: (item, color) =>
    set((state) => ({
      ...state,
      [item]: { ...state[item], color },
    })),
  changeBrushSize: (item, size) =>
    set((state) => ({
      ...state,
      [item]: { ...state[item], size },
    })),
}));

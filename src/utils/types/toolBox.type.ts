import { MENU_ITEMS } from "../enums";

export interface BrushTool {
  color: string;
  size: number;
}

export interface ToolboxState {
  [MENU_ITEMS.PENCIL]: BrushTool;
  [MENU_ITEMS.ERASER]: BrushTool;
  [MENU_ITEMS.UNDO]: {};
  [MENU_ITEMS.REDO]: {};
  [MENU_ITEMS.DOWNLOAD]: {};
}

export interface ToolboxActions {
  changeColor: (item: keyof ToolboxState, color: string) => void;
  changeBrushSize: (item: keyof ToolboxState, size: number) => void;
}

import { Color, MenuItem } from "../types";

const COLORS: Record<Capitalize<Color>, string> = {
  Black: "black",
  Red: "red",
  Green: "green",
  Blue: "blue",
  Orange: "orange",
  Yellow: "yellow",
  White: "white",
};
const MENU_ITEMS: Record<MenuItem, string> = {
  PENCIL: "PENCIL",
  ERASER: "ERASER",
  UNDO: "UNDO",
  REDO: "REDO",
  DOWNLOAD: "DOWNLOAD",
};

export { COLORS, MENU_ITEMS };

import { ToolboxState } from "../types/toolBox.type";

export const getBrushTool = (state: ToolboxState, item: keyof ToolboxState) => {
  const tool = state[item];
  return "color" in tool && "size" in tool ? tool : null;
};

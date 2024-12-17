import React, { memo, useCallback } from "react";

import { useActiveMenuItem } from "@/store/menuStore";
import { useToolboxStore } from "@/store/toolBoxStore";

import { COLORS, MENU_ITEMS } from "@/utils/enums";
import { BrushTool } from "@/utils/types/toolBox.type";

import { ToolSection } from "./components/ToolSection";
import { ColorBox } from "./components/ColorBox";

import styles from "./index.module.css";

const colorOptions = [
  COLORS.Black,
  COLORS.Red,
  COLORS.Green,
  COLORS.Blue,
  COLORS.Orange,
  COLORS.Yellow,
];

const Toolbox = () => {
  const activeMenuItem = useActiveMenuItem();
  const { color, size: brushSize } = useToolboxStore((state) => {
    const item = state[activeMenuItem] as BrushTool;
    return item;
  });
  const changeBrushSize = useToolboxStore((state) => state.changeBrushSize);
  const changeColor = useToolboxStore((state) => state.changeColor);

  const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrushToolOption =
    activeMenuItem === MENU_ITEMS.PENCIL ||
    activeMenuItem === MENU_ITEMS.ERASER;

  const handleColorClick = useCallback(
    (color: string) => {
      console.log(`Color selected: ${color}`);
      changeColor(activeMenuItem, color);
    },
    [activeMenuItem, changeColor]
  );

  const handleBrushSizeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(`Brush size: ${e.target.value}`);
      changeBrushSize(activeMenuItem, Number(e.target.value));
    },
    [activeMenuItem, changeBrushSize]
  );

  return (
    <div className={styles.toolboxContainer}>
      {showStrokeToolOption && (
        <ToolSection title="Stroke Color">
          <div className={styles.itemContainer}>
            {colorOptions.map((item) => (
              <ColorBox
                key={item}
                color={item}
                isActiveColor={item === color}
                onClick={handleColorClick}
              />
            ))}
          </div>
        </ToolSection>
      )}

      {showBrushToolOption && (
        <ToolSection title="Brush Size">
          <div className={styles.itemContainer}>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              onChange={handleBrushSizeChange}
              value={brushSize}
            />
          </div>
        </ToolSection>
      )}
    </div>
  );
};

export default memo(Toolbox);

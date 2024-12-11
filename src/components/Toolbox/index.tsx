import React, { memo, useCallback } from "react";

import { COLORS } from "@/utils/enums";
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
  const handleColorClick = useCallback((color: string) => {
    console.log(`Color selected: ${color}`);
  }, []);

  const handleBrushSizeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(`Brush size: ${event.target.value}`);
    },
    []
  );

  return (
    <div className={styles.toolboxContainer}>
      <ToolSection title="Stroke Color">
        <div className={styles.itemContainer}>
          {colorOptions.map((color) => (
            <ColorBox key={color} color={color} onClick={handleColorClick} />
          ))}
        </div>
      </ToolSection>

      <ToolSection title="Brush Size">
        <div className={styles.itemContainer}>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            defaultValue={5}
            onChange={handleBrushSizeChange}
            className={styles.slider}
          />
        </div>
      </ToolSection>
    </div>
  );
};

export default memo(Toolbox);

import { COLORS } from "@/utils/enums";
import styles from "./index.module.css";
const Toolbox = () => {
  return (
    <div className={styles.toolboxContainer}>
      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Stroke Color</h4>
        <div className={styles.itemContainer}>
          <div
            className={styles.colorBox}
            style={{ backgroundColor: COLORS.Black }}
            onClick={() => {}}
          />
          <div
            className={styles.colorBox}
            style={{ backgroundColor: COLORS.Red }}
            onClick={() => {}}
          />
          <div
            className={styles.colorBox}
            style={{ backgroundColor: COLORS.Green }}
            onClick={() => {}}
          />
          <div
            className={styles.colorBox}
            style={{ backgroundColor: COLORS.Blue }}
            onClick={() => {}}
          />
          <div
            className={styles.colorBox}
            style={{ backgroundColor: COLORS.Orange }}
            onClick={() => {}}
          />
          <div
            className={styles.colorBox}
            style={{ backgroundColor: COLORS.Yellow }}
            onClick={() => {}}
          />
        </div>
      </div>

      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Brush Size</h4>
        <div className={styles.itemContainer}>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            onChange={() => {}}
            value={5}
            className={styles.slider}
          />
        </div>
      </div>
    </div>
  );
};

export default Toolbox;

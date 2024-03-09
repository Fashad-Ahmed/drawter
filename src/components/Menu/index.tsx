import {
  faEraser,
  faFileArrowDown,
  faPencil,
  faRotateLeft,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.css";

const Menu = () => {
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faPencil} className={styles.icon} />
      </div>
      <div>
        <FontAwesomeIcon icon={faEraser} className={styles.icon} />
      </div>
      <div>
        <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
      </div>
      <div>
        <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
      </div>
      <div>
        <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />
      </div>
    </div>

  );
};

export default Menu;

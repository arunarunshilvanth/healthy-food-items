import styles from "./FoodInput.module.css";
import { FaSearch } from "react-icons/fa";

const FoodInput = ({ onKeyDownButton }) => {
  return (
    <div className={styles.inputWrapper}>
      <FaSearch className={styles.icon} />
      <input
        type="text"
        placeholder="🥦 Add healthy food & press Enter"
        className={styles.foodInput}
        onKeyDown={onKeyDownButton}
      />
    </div>
  );
};

export default FoodInput;

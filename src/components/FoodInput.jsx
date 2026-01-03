import styles from "./FoodInput.module.css";
const FoodInput = ({ onKeyDownButton }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Enter to do here"
        className={styles.foodInput}
        onKeyDown={onKeyDownButton}
      />
    </>
  );
};
export default FoodInput;

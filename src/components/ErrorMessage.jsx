import styles from "./ErrorMessage.module.css";
import { FaUtensils } from "react-icons/fa";

const ErrorMessage = ({ items }) => {
  if (items.length !== 0) return null;

  return (
    <div className={styles.emptyState}>
      <FaUtensils className={styles.icon} />
      <h3 className={styles.title}>Still Hungry?</h3>
      <p className={styles.subtitle}>
        Add some healthy foods to fuel your day 🍎🥦
      </p>
    </div>
  );
};

export default ErrorMessage;

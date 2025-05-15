import styles from "./Aloader.module.css";
const LoadingSpinner = () => {
  return (
    <div className={styles["loader-container"]}>
      <div className={styles["spinner"]}></div>
    </div>
  );
};

export default LoadingSpinner;
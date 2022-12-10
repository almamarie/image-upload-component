import Card from "./Card";
import styles from "./Loader.module.css";
const Loader = (props) => {
  const first_loading = `${styles["moving-part"]} ${styles["first-moving-part"]}`;
  const second_loading = `${styles["moving-part"]} ${styles["second-moving-part"]}`;

  return (
    <Card className={styles.wrapper}>
      <h3>Uploading...</h3>
      <div className={styles["loading-box"]}>
        <div className={first_loading}></div>
        <div className={second_loading}></div>
      </div>
    </Card>
  );
};

export default Loader;

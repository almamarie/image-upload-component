import Card from "./UI/Card";
import styles from "./UploadSuccessful.module.css";

const UploadSuccessful = (props) => {
  const data = props.data.fileData;

  const copyText = (event) => {
    event.preventDefault();
    navigator.clipboard.writeText(data.fileUrl).then(() => {
      alert("Url copied");
    });
  };
  return (
    <Card className={styles.card}>
      <div className={styles.success}>
        <div className={styles["icon-wrapper"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className={styles.icon}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <h3 className={styles.heading}>Upload Successfull!</h3>
      </div>

      <img className={styles.img} src={data.fileUrl} alt="uploaded file" />
      <div className={styles["link-wrapper"]}>
        <p className={styles.url}>{data.fileUrl}</p>
        <button onClick={copyText} className={styles.button}>
          Copy link
        </button>
      </div>
    </Card>
  );
};

export default UploadSuccessful;

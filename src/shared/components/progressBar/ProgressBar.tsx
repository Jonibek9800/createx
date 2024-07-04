import styles from "./ProgressBar.module.css";

const ProgressBar = ({
  value,
  size,
  progressBgc,
  borderBgc,
}: {
  value: number | string;
  size?: number | string;
  progressBgc?: string;
  borderBgc?: string;
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={styles.progress_bar_wrap}
    >
      <div className={styles.progress_bar_line}>{value}</div>
    </div>
  );
};

export default ProgressBar;

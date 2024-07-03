import styles from "./HomeOurEntity.module.css";

export default function HomeOurEntity({
  icon,
  title,
  content,
  classes,
}: {
  icon: string;
  title: string;
  content?: string;
  classes?: string;
}) {
  return (
    <div className={`${styles.home_our_entity} ${classes}`}>
      <img src={icon} alt="icon" />
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
}

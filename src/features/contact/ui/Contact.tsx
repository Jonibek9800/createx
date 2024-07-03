import styles from "./Contact.module.css";

export default function Contact({
  icon,
  title,
  path,
}: {
  icon: string;
  title: string;
  path: string;
}) {
  return (
    <div className={styles.contact}>
      <img src={icon} alt={title} />
      <div className={styles.contact_name}>
        <p>{title}</p>
        <span>{path}</span>
      </div>
    </div>
  );
}

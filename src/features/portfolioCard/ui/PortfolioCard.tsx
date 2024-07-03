import styles from "./PortfolioCard.module.css";

export default function PortfolioCard({
  image,
  title,
  text,
  path,
}: {
  image: string;
  title: string;
  text: string;
  path: string;
}) {
  return (
    <div className={styles.portfoli_card}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
      <a href={path}>VIEW PROJECT</a>
    </div>
  );
}

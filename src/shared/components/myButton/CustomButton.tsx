import { MouseEventHandler } from "react";
import styles from "./CustomButton.module.css";

const CustomButton = ({
  onClick,
  children,
  attrs,
  classes,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: string;
  attrs?: any;
  classes?: string;
}) => {
  return (
    <button
      className={`${classes} ${styles.my_button}`}
      onClick={onClick}
      {...attrs}
    >
      {children}
    </button>
  );
};

export default CustomButton;

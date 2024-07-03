import { ChangeEventHandler } from "react";
import styles from "./MyInput.module.css";
const MyInput = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  classes,
  labelText,
}: {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  classes: string;
  labelText: string;
}) => {
  return (
    <div className={styles.input_wrap}>
      <label htmlFor={name}>{labelText}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${classes} ${styles.my_input}`}
      />
    </div>
  );
};

export default MyInput;

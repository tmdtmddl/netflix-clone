import { IoCheckbox, IoCheckboxOutline } from "react-icons/io5";
import styles from "./checkbox.css";

const CheckBox = ({ id, state, onClick, label, type }) => {
  return (
    <div className={styles.container}>
      <button
        id={id}
        onClick={onClick}
        type={type ?? "button"}
        className={styles.button}
      >
        {/* 왼쪽조건에 만족할때만 오른쪽을 보여주세요 실행해주세요 */}
        {state ? <IoCheckbox className={styles.icon} /> : <IoCheckboxOutline />}
      </button>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default CheckBox;

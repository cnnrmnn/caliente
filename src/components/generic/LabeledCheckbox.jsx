import Checkbox from './Checkbox';
import styles from './LabeledCheckbox.css';

export default function LabeledCheckbox({ text, color, checked, onClick }) {
  return (
    <label className={styles.label}>
      <span className={styles.checkbox}>
        <Checkbox color={color} checked={checked} onClick={onClick} />
      </span>
      {text}
    </label>
  );
}

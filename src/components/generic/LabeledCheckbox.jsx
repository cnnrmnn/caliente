import Checkbox from './Checkbox';
import styles from './LabeledCheckbox.css';

export default function LabeledCheckbox({ text, color }) {
  return (
    <label className={styles.label}>
      <span className={styles.checkbox}>
        <Checkbox color={color} />
      </span>
      {text}
    </label>
  );
}

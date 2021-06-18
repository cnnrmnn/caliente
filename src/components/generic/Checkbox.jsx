import styles from './Checkbox.css';

export default function Checkbox({ color, checked, onClick }) {
  return (
    <input
      className={styles.input}
      type="checkbox"
      checked={checked}
      onChange={onClick}
      style={{ color }}
    />
  );
}

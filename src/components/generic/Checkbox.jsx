import styles from './Checkbox.css';

export default function Checkbox({ color }) {
  return <input className={styles.input} type="checkbox" style={{ color }} />;
}

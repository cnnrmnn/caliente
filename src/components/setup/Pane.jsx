import styles from './Pane.css';

export default function Pane({ children }) {
  return <div className={styles.pane}>{children}</div>;
}

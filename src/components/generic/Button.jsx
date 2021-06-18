import styles from './Button.css';

export default function Button({ text }) {
  return <button className={styles.button}>{text}</button>;
}

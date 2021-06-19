import styles from './Button.css';

export default function Button({ text, type, onClick }) {
  return (
    <button className={styles.button} type={type || 'button'} onClick={onClick}>
      {text}
    </button>
  );
}

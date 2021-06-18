import styles from './TextInput.css';

export default function TextInput({ value, placeholder }) {
  return (
    <input
      className={styles.input}
      type="text"
      value={value}
      placeholder={placeholder}
    />
  );
}

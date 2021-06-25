import { useRef } from 'react';
import styles from './DateTimeInput.css';

export default function DateTimeInput({ value, setValue }) {
  function handleChange(event) {
    setValue(new Date(event.target.value));
  }

  return (
    <input
      className={styles.input}
      type="datetime-local"
      value={value.toISOString().substr(0, 19)}
      onChange={handleChange}
    />
  );
}

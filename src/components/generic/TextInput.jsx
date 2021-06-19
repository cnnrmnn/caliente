import styles from './TextInput.css';

export default function TextInput({ value, setValue, placeholder, onBlur }) {
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <input
      className={styles.input}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      onBlur={onBlur}
    />
  );
}

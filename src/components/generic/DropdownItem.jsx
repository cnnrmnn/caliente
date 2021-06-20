import styles from './DropdownItem.css';

export default function DropdownItem({ text, onClick }) {
  return (
    <li className={styles.item} onClick={onClick}>
      {text}
    </li>
  );
}

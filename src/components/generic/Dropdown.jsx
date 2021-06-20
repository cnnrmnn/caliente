import { useEffect, useRef, useState } from 'react';
import styles from './Dropdown.css';

export default function Dropdown({ title, children }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  function handleOutsideClick(event) {
    if (ref.current && !ref.current.contains(event.target)) setOpen(false);
  }

  function handleClick(event) {
    setOpen(!open);
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick, false);
    return () =>
      document.removeEventListener('click', handleOutsideClick, false);
  });

  let dropdownClass = styles.dropdown;
  if (open) dropdownClass += ` ${styles.dropdownOpen}`;
  return (
    <div>
      <div className={styles.container}>
        <div className={dropdownClass} ref={ref} onClick={handleClick}>
          <h3 className={styles.title}>{title}</h3>
        </div>
        {open && <ul className={styles.items}>{children}</ul>}
      </div>
    </div>
  );
}

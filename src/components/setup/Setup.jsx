import { useState } from 'react';
import Pane from './Pane';
import CalendarSetupForm from './CalendarSetupForm';
import ColorSetupForm from './ColorSetupForm';
import { getCalendars } from '../../api/calendar';
import styles from './Setup.css';

export default function Setup() {
  const [form, setForm] = useState('calendar');

  function formComponent() {
    switch (form) {
      case 'calendar':
        return <CalendarSetupForm setForm={setForm} />;
      case 'color':
        return <ColorSetupForm setForm={setForm} />;
    }
  }

  return (
    <div className={styles.container}>
      <Pane>
        <div className={styles.content}>{formComponent()}</div>
      </Pane>
    </div>
  );
}

import { useState } from 'react';
import Pane from './Pane';
import CalendarSetupForm from './CalendarSetupForm';
import { getCalendars } from '../../api/calendar';
import styles from './Setup.css';

export default function Setup() {
  const [content, setContent] = useState('calendar');
  function contentComponent() {
    switch (content) {
      case 'calendar':
        return <CalendarSetupForm setContent={setContent} />;
      case 'colors':
        return <h1>Colors</h1>;
    }
  }
  return (
    <div className={styles.container}>
      <Pane>
        <div className={styles.content}>{contentComponent()}</div>
      </Pane>
    </div>
  );
}

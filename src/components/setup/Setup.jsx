import { useState } from 'react';
import Pane from './Pane';
import CalendarSetupForm from './CalendarSetupForm';
import ColorSetupForm from './ColorSetupForm';
import { getCalendars } from '../../api/calendar';
import styles from './Setup.css';

export default function Setup() {
  const [content, setContent] = useState('calendar');

  function closeSetup() {
    alert('hi!');
  }

  function contentComponent() {
    switch (content) {
      case 'calendar':
        return <CalendarSetupForm setContent={setContent} />;
      case 'color':
        return <ColorSetupForm setContent={setContent} />;
      case 'close':
        closeSetup();
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

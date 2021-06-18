import { useEffect, useState } from 'react';
import Pane from './Pane';
import LabeledCheckbox from '../generic/LabeledCheckbox';
import { getCalendars } from '../../api/calendar';
import styles from './Setup.css';

export default function Setup() {
  const [calendars, setCalendars] = useState([]);
  useEffect(() => {
    async function updateCalendars() {
      setCalendars(await getCalendars());
    }
    updateCalendars();
  }, []);

  return (
    <div className={styles.container}>
      <Pane>
        <h1 className={styles.welcome}>Welcome!</h1>
        <h3>Let's get started</h3>
        <p className={styles.subheading}>
          Which calendars would you like to use?
        </p>
        {calendars.map((calendar) => (
          <LabeledCheckbox
            key={calendar.id}
            text={calendar.name}
            color={calendar.background}
          />
        ))}
      </Pane>
    </div>
  );
}

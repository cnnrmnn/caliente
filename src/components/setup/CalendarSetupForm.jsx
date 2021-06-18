import { useEffect, useState } from 'react';
import Button from '../generic/Button';
import LabeledCheckbox from '../generic/LabeledCheckbox';
import { getCalendars } from '../../api/calendar';
import styles from './CalendarSetupForm.css';

export default function CalendarSetupForm() {
  const [calendars, setCalendars] = useState([]);
  useEffect(() => {
    async function updateCalendars() {
      setCalendars(await getCalendars());
    }
    updateCalendars();
  }, []);

  return (
    <form>
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
          checked={calendar.active}
          onClick={() => alert('hi')}
        />
      ))}
      <Button text="Continue" />
    </form>
  );
}

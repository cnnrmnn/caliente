import { useEffect, useState } from 'react';
import Button from '../generic/Button';
import LabeledCheckbox from '../generic/LabeledCheckbox';
import { getCalendars, updateCalendar } from '../../api/calendar';
import styles from './CalendarSetupForm.css';

export default function CalendarSetupForm({ setForm }) {
  const [calendars, setCalendars] = useState([]);
  useEffect(() => {
    async function updateCalendars() {
      setCalendars(await getCalendars());
    }
    updateCalendars();
  }, []);

  async function toggleCalendarActive(calendar) {
    const updated = await updateCalendar(calendar.id, {
      active: !calendar.active,
    });
    setCalendars((oldCalendars) =>
      oldCalendars.map((old) => (old.id == updated.id ? updated : old))
    );
  }

  return (
    <form onSubmit={() => setForm('color')}>
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
          onClick={() => toggleCalendarActive(calendar)}
        />
      ))}
      <div className={styles.button}>
        <Button text="Continue" type="submit" />
      </div>
    </form>
  );
}

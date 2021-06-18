import { useEffect, useState } from 'react';
import Pane from './Pane';
import CalendarSetupForm from './CalendarSetupForm';
import { getCalendars } from '../../api/calendar';
import styles from './Setup.css';

export default function Setup() {
  return (
    <div className={styles.container}>
      <Pane>
        <div className={styles.content}>
          <CalendarSetupForm />
        </div>
      </Pane>
    </div>
  );
}

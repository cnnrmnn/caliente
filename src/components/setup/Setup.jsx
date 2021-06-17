import Pane from './Pane';
import styles from './Setup.css';

export default function Setup() {
  return (
    <div className={styles.container}>
      <Pane>
        <h1 className={styles.welcome}>Welcome!</h1>
        <h3>Let's get started</h3>
        <p>Which calendars would you like to use?</p>
      </Pane>
    </div>
  );
}

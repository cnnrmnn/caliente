import { useContext } from 'react';
import Setup from './setup/Setup';
import UserContext from '../context/user';
import styles from './Main.css';

export default function Main() {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.main}>
      {user?.setup ? <h1>Dashboard</h1> : <Setup />}
    </div>
  );
}

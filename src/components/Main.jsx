import { useContext } from 'react';
import UserContext from '../context/user';
import Setup from './setup/Setup';
import styles from './Main.css';
export default function Main() {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className={styles.main}>
      {user && user.setup ? <h1>Dashboard</h1> : <Setup />}
    </div>
  );
}

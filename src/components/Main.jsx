import { useContext } from 'react';
import Setup from './setup/Setup';
import Dashboard from './dashboard/Dashboard';
import UserContext from '../context/user';
import styles from './Main.css';

export default function Main() {
  const { user } = useContext(UserContext);

  function mainComponent() {
    if (user == 'unset') return <h1>Loading...</h1>;
    else if (!user) return <h1>Sign in</h1>;
    else if (user?.setup) return <Dashboard />;
    else return <Setup />;
  }
  return <div className={styles.main}>{mainComponent()}</div>;
}

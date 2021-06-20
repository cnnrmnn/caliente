import { useContext } from 'react';
import Dropdown from '../generic/Dropdown';
import DropdownItem from '../generic/DropdownItem';
import { logOut } from '../../api/user';
import UserContext from '../../context/user';
import styles from './Navbar.css';

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);

  async function handleLogOut() {
    await logOut();
    setUser(null);
  }

  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>caliente</h1>
      <Dropdown title={`${user.first_name} ${user.last_name}`}>
        <DropdownItem text="Log out" onClick={handleLogOut} />
      </Dropdown>
    </div>
  );
}

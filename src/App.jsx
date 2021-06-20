import { useEffect, useState } from 'react';
import { me } from './api/user';
import UserContext from './context/user';
import Main from './components/Main';

export default function App() {
  const [user, setUser] = useState('unset');
  useEffect(() => {
    async function updateUser() {
      const currentUser = await me();
      if (currentUser.hasOwnProperty('error')) setUser(null);
      else setUser(currentUser);
    }
    updateUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Main />
    </UserContext.Provider>
  );
}

import { useEffect, useState } from 'react';
import { me } from './api/user';
import UserContext from './context/user';
import Main from './components/Main';

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function updateUser() {
      setUser(await me());
    }
    updateUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Main />
    </UserContext.Provider>
  );
}

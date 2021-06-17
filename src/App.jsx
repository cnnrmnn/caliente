import { useEffect, useState } from 'react';
import { me } from './api/user';
import UserContext from './context/user';

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
      <h1>{user ? user.email : 'hi'}</h1>
    </UserContext.Provider>
  );
}

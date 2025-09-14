import { useEffect, createContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { User } from '../types';

const initialUserData : User = {
  id: '',
  name: '',
  roles: [],
}

type Props = {
  children: ReactNode;
};

export const AuthContext = createContext(initialUserData);
// export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ( {children}:  Props) => {
  const [authData, setAuthData] = useState(initialUserData);
  const [loading, setLoading] = useState(false);
  
  useEffect( () => {
    const fetchUserData = async () => {
      try {
        // const response = await fetch ('/api/user-data');
        const data: User = { id: '123', name: "Dan", roles: ["admin", "delete", "save"]}
        setAuthData(data);
      } catch (error) {
        console.error("failed to fetch user data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchUserData();
  }, []);


  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}
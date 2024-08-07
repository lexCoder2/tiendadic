import { createContext, ReactNode, useContext, useState } from 'react';
import { authType } from '../types/auth.type';

const authContext = createContext({})
export function useAuth(): authType {
  const [authed, setAuthed] = useState(false);

  return {
    authed,
    login() {
      return new Promise<void>((res) => {
        setAuthed(true);
        res();
      });
    },
    logout() {
      return new Promise<void>((res) => {
        setAuthed(false);
        res();
      });
    },
  };
}
type provider = {children: ReactNode}
export function AuthProvider({ children }: provider) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export default function AuthConsumer() {
  return useContext(authContext);
}
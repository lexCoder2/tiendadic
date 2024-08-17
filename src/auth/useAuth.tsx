import { useState } from 'react';
import { AuthType } from '../types/auth.type';

export function useAuth(): AuthType {
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


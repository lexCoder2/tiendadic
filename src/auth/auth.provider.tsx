import { createContext, ReactNode } from "react";
import { useAuth } from "./useAuth";

const authContext = createContext({})

type provider = {children: ReactNode}
export function AuthProvider({ children }: provider) {
  const auth = useAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
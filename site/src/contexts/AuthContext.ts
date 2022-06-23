import { createContext } from "react";

interface IAuthContex {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export const AuthContext = createContext<IAuthContex>({
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated: boolean) => {},
});

export const AuthContextProvider = AuthContext.Provider;

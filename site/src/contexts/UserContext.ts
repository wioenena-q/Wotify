import { createContext } from "react";

export interface IUserContext {
  user?: IUser | null;
  setUser: (user: IUser | null) => void;
}
export interface IUser {
  id: string;
  username: string;
}

export const UserContext = createContext<IUserContext>({
  user: null,
  setUser: (user: IUser | null) => {},
});

export const UserContextProvider = UserContext.Provider;

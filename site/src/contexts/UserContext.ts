import { createContext } from "react";
import type { IUser } from "../utils/types";

export interface IUserContext {
  user?: IUser | null;
  setUser: (user: IUser | null) => void;
}

export const UserContext = createContext<IUserContext>({
  user: null,
  setUser: (user: IUser | null) => {},
});

export const UserContextProvider = UserContext.Provider;

import { PropsWithChildren, createContext, useContext, useState } from "react";
import { User } from "./types";

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const defaultUserContext: UserContextType = {
  user: null,
  setUser: () => null,
};

const UserContext = createContext(defaultUserContext);

export default function UserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);

  const value: UserContextType = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}

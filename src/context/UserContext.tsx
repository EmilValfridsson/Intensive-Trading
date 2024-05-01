import { PropsWithChildren, createContext, useContext, useState } from "react";
import { User } from "../types";
import authService from "../services/authService";

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = createContext({} as UserContextType);

export default function UserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(() => {
    return authService.getCurrentUser();
  });

  const value: UserContextType = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext() {
  return useContext(UserContext);
}

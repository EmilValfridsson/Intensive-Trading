import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { favoriteTickers } from "../types";
import auth from "../services/authService";
import { getFavorites } from "../services/favoriteService";
import { useUserContext } from "./UserContext";

interface UserStocksContextType {
  userStocks: favoriteTickers[];
  setUserStocks: React.Dispatch<React.SetStateAction<favoriteTickers[]>>;
}

const UserStocksContext = createContext({} as UserStocksContextType);

export default function UserStocksProvider({ children }: PropsWithChildren) {
  const [userStocks, setUserStocks] = useState<favoriteTickers[]>([]);
  const { user } = useUserContext();

  useEffect(() => {
    async function fetch() {
      const token = auth.getJwt();
      if (!token) return null;
      const response = await getFavorites(token);
      const stocks: favoriteTickers[] = response.data;
      setUserStocks(stocks);
    }
    fetch();
  }, [user]);

  const value: UserStocksContextType = {
    userStocks,
    setUserStocks,
  };

  return (
    <UserStocksContext.Provider value={value}>
      {children}
    </UserStocksContext.Provider>
  );
}

export function useUserStocksContext() {
  return useContext(UserStocksContext);
}

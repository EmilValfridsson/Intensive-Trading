import { useEffect, useState } from "react";
import authService from "../services/authService";
import { getFavorites } from "../services/favoriteService";

import { favoriteTickers } from "../types";

export function useUserStocks() {
  const [userStocks, setUserStocks] = useState<favoriteTickers[]>();

  useEffect(() => {
    async function fetch() {
      const token = authService.getJwt();
      if (!token) return null;
      const response = await getFavorites(token);
      const stocks: favoriteTickers[] = response.data;
      if (stocks) setUserStocks([...stocks]);
    }
    fetch();
  }, []);

  return { userStocks, setUserStocks };
}

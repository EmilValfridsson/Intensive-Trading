import { useEffect, useState } from "react";
import { getStats } from "../services/stockService";
import { StockInfo } from "../types";

export function useStockStats() {
  const [stockStats, setStockStats] = useState<StockInfo>();
  useEffect(() => {
    async function fetch() {
      const { data: stats } = await getStats();
      setStockStats(stats);
    }
    fetch();
  }, []);
  return { stockStats, setStockStats };
}

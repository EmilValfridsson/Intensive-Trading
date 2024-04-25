import { PropsWithChildren, createContext, useContext, useState } from "react";
import { StockInfo } from "../types";

interface Stats {
  stockStats: StockInfo | undefined;
  setStockStats(stockStats: StockInfo): void;
}

const StatsContext = createContext({} as Stats);

export default function StatsProvider({ children }: PropsWithChildren) {
  const [stockStats, setStockStats] = useState<StockInfo>();

  const value = { stockStats, setStockStats };

  return (
    <StatsContext.Provider value={value}>{children}</StatsContext.Provider>
  );
}

export function useStatsContext() {
  return useContext(StatsContext);
}

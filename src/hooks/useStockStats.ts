// import { useEffect, useState } from "react";
// import { getStats } from "../services/stockService";
// import { StockInfo } from "../types";
// import { useSearchContext } from "../context/SearchContext";

// export function useStockStats() {
//   const { searchValue } = useSearchContext();
//   const [stockStats, setStockStats] = useState<StockInfo>();
//   useEffect(() => {
//     async function fetch() {
//       const { data: stats } = await getStats(searchValue);
//       setStockStats(stats);
//     }
//     fetch();
//   }, []);
//   return { stockStats, setStockStats };
// }

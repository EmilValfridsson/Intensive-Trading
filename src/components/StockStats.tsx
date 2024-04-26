import { useEffect } from "react";
import { useStatsContext } from "../context/StatsContext";
import { getStats } from "../services/stockService";
import { useSearchContext } from "../context/SearchContext";

export default function StockStats() {
  const { stockStats, setStockStats } = useStatsContext();
  const { searchValue } = useSearchContext();
  useEffect(() => {
    async function fetch() {
      const { data: stats } = await getStats(searchValue);
      setStockStats(stats);
    }
    fetch();
  }, [searchValue]);

  if (!stockStats) return <p>Loading...</p>;
  return (
    <div className="flex justify-center h-80">
      <ul className="bg-base-200 rounded-box w-full overflow-scroll">
        <div className="overflow-x-auto">
          <table className="table-sm">
            <tbody>
              {Object.entries(stockStats).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ul>
    </div>
  );
}

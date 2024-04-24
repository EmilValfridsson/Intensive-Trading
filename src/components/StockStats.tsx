import { useStockStats } from "../hooks/useStockStats";

export default function StockStats() {
  const { stockStats } = useStockStats();

  console.log(stockStats);
  if (!stockStats) return <p>Loading...</p>;
  return (
    <div className="flex justify-center h-80">
      <ul className="bg-base-200 rounded-box w-full overflow-scroll">
        <div className="overflow-x-auto">
          <table className="table">
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

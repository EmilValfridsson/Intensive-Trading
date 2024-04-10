import { useTgl } from "../hooks/useTgl";

export default function TradedStocks() {
  const stocks = [
    "Evolution",
    "SAAB B",
    "H&M B",
    "Company D",
    "Company E",
    "Company E",
    "Company E",
    "Company E",
  ];

  const { tgl, setTgl } = useTgl();

  return (
    <div className="left-menu mr-auto mt-50">
      <ul
        className="m-8 menu bg-base-200 w-56 rounded-box grid grid-cols-1 overflow-scroll"
        style={{
          height: "400px",
        }}
      >
        <li className="text-xl menu-title">Mest omsatta aktier</li>
        {tgl ? (
          tgl.map((stock, index) => (
            <li key={stock.ticker} className="text-xl">
              <div>
                <a>{stock.ticker}</a>{" "}
                <a className=" text-green-500">{stock.change_percentage}</a>
              </div>
            </li>
          ))
        ) : (
          <li>loading....</li>
        )}
      </ul>
    </div>
  );
}

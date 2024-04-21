import { useSearchContext } from "../SearchContext";
import { useTopgainers } from "../hooks/useTopGainers";
import FavoriteButton from "./FavoriteButton";

export default function TradedStocks() {
  const { topGainers } = useTopgainers();
  const { setSearchValue } = useSearchContext();

  return (
    <div className="left-menu mr-auto mt-50">
      <ul
        className="m-8 menu bg-base-200 w-56 rounded-box grid grid-cols-1 overflow-scroll"
        style={{
          height: "400px",
        }}
      >
        <li className="text-xl menu-title">Top Gainers</li>
        {topGainers.map((stock, index) => (
          <li key={index} style={{ fontSize: "15px", position: "relative" }}>
            <FavoriteButton
              isFavored={Boolean(stock.isFavored)}
              onFavor={() => console.log(stock.ticker)}
            />
            <div
              onClick={() => setSearchValue(stock.ticker)}
              style={{ paddingLeft: "25px" }}
            >
              <a>{stock.ticker}</a>
              <a className=" text-green-500 text-right">
                {stock.change_percentage}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

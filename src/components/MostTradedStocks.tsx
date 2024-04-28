import { useSearchContext } from "../SearchContext";
import { useTopgainers } from "../hooks/useTopGainers";
import auth from "../services/authService";
import { addFavorite } from "../services/favoriteService";
import FavoriteButton from "./FavoriteButton";

export default function TradedStocks() {
  const { topGainers, setTopGainers } = useTopgainers();
  const { setSearchValue } = useSearchContext();
  const user = auth.getCurrentUser();

  async function handleFavor(ticker: string) {
    try {
      const token = await auth.getJwt();
      if (token) {
        await addFavorite(ticker, token);
      }
      const newFavorite = topGainers.map((stock) => {
        if (stock.ticker === ticker) {
          return { ...stock, isFavored: !stock.isFavored };
        }
        return stock;
      });
      setTopGainers(newFavorite);
    } catch (error) {
      console.error("failed to add stock as favorite");
    }
  }

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
            {user && (
              <FavoriteButton
                isFavored={Boolean(stock.isFavored)}
                onFavor={() => handleFavor(stock.ticker)}
              />
            )}
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

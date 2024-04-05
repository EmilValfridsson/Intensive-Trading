import FavoriteStocks from "../components/FavoriteStocks";
import TradedStocks from "../components/MostTradedStocks";
import StatisticsNews from "../components/StatisticsNews";
import Stock from "../components/Stock";

export default function MainPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-row">
        <div className="flex-shrink">
          <TradedStocks />
        </div>
        <div className="flex-grow">
          <Stock />
          <StatisticsNews />
        </div>
        <div className="flex-shrink">
          <FavoriteStocks />
        </div>
      </div>
    </div>
  );
}

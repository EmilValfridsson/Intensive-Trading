import FavoriteStocks from "../components/FavoriteStocks";
import TradedStocks from "../components/MostTradedStocks";
import StatisticsNews from "../components/StatisticsNews";
import Stock from "../components/Stock";
import StockStats from "../components/StockStats";

export default function MainPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-row">
        <div className="flex-shrink">
          <TradedStocks />
        </div>
        <div className="flex-grow">
          <div className="flex justify-center">
            <Stock />
          </div>
          <StockStats />
          <StatisticsNews />
        </div>
        <div className="flex-shrink">
          <FavoriteStocks />
        </div>
      </div>
    </div>
  );
}

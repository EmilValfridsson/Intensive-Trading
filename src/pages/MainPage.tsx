import FavoriteStocks from "../components/FavoriteStocks";
import TradedStocks from "../components/MostTradedStocks";
import StatisticsNews from "../components/StatisticsNews";
import Stock from "../components/Stock";

export default function MainPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-row">
        <TradedStocks />
        <Stock />
        <FavoriteStocks />
      </div>
      <div
        className="flex-grow flex justify-center items-center"
        //style={{ position: "absolute", bottom: "20px", width: "100%" }}
      >
        <div style={{ width: "80%", maxWidth: "800px" }}>
          <StatisticsNews />
        </div>
      </div>
    </div>
  );
}

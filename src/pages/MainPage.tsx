import FavoriteStocks from "../components/FavoriteStocks";
import TradedStocks from "../components/MostTradedStocks";
import NavBar from "../components/NavBar";
import StatisticsNews from "../components/StatisticsNews";
import Stock from "../components/Stock";
import { useState } from "react";

export default function MainPage() {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = (Value: string) => {
    setSearchValue(Value);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar onSearch={handleSearch} />
      <div className="flex-grow flex flex-row">
        <div className="flex-shrink">
          <TradedStocks />
        </div>
        <div className="flex-grow">
          <Stock searchValue={searchValue} />
          <StatisticsNews />
        </div>
        <div className="flex-shrink">
          <FavoriteStocks />
        </div>
      </div>
    </div>
  );
}

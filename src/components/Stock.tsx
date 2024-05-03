import { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { useSearchContext } from "../context/SearchContext";
import FavoriteButton from "./FavoriteButton";
import auth from "../services/authService";
import { addFavorite } from "../services/favoriteService";
import { useUserStocksContext } from "../context/UserStocksContext";
import { favoriteTickers } from "../types";
import AbsoluteFavoriteButton from "./AbsoluteFavoriteButton";

function Stock() {
  const { searchValue } = useSearchContext();
  const { userStocks, setUserStocks } = useUserStocksContext();
  const [xValues, setXValues] = useState<string[]>([]);
  const [yValues, setYValues] = useState<number[]>([]);
  const user = auth.getCurrentUser();
  async function handleFavor(ticker: string) {
    try {
      const token = await auth.getJwt();
      if (token) {
        await addFavorite(ticker, token);

        const alreadyAdded = userStocks.some(
          (stock) => stock.favoriteTicker === ticker
        );

        if (alreadyAdded) return;

        const newFavorite: favoriteTickers = { favoriteTicker: ticker };

        setUserStocks((prev) => [...prev, newFavorite]);
      }
    } catch (error) {
      console.error("failed to add stock as favorite");
    }
  }

  useEffect(() => {
    if (searchValue) {
      setXValues([]);
      setYValues([]);
      fetch(`http://localhost:9111/api/stocks?data=${searchValue}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const newXValues: string[] = [];
          const newYValues: number[] = [];
          for (var key in data[`Time Series (Daily)`]) {
            newXValues.push(key);
            newYValues.push(data[`Time Series (Daily)`][key][`1. open`]);
          }
          setXValues((prevXValues) => [...prevXValues, ...newXValues]);
          setYValues((prevYValues) => [...prevYValues, ...newYValues]);
        });
    }
  }, [searchValue]);
  return (
    <div className="relative rounded-xl overflow-hidden">
      <div>Add to your favorite</div>
      {user && (
        <AbsoluteFavoriteButton
          isFavored={Boolean(searchValue)}
          onFavor={() => handleFavor(searchValue)}
        />
      )}
      <Plot
        data={[
          {
            x: xValues,
            y: yValues,
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "green" },
          },
        ]}
        layout={{
          paper_bgcolor: "#e4d8b4",
          plot_bgcolor: "#e4d8b4",
          width: 640,
          height: 480,
          title: `${searchValue}`,
        }}
      />
    </div>
  );
}

export default Stock;

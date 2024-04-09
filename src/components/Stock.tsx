import { useEffect, useState } from "react";
import Plot from "react-plotly.js";

interface StockProps {
  searchValue: string;
}
function Stock({ searchValue }: StockProps) {
  const [xValues, setXValues] = useState<string[]>([]);
  const [yValues, setYValues] = useState<number[]>([]);
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
    <div>
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
        layout={{ width: 640, height: 480, title: `${searchValue}` }}
      />
    </div>
  );
}

export default Stock;

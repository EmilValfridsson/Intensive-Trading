import { useEffect, useState } from "react";
import Plot from "react-plotly.js";

function Stock(value: string) {
  const [xValues, setXValues] = useState<string[]>([]);
  const [yValues, setYValues] = useState<number[]>([]);
  useEffect(() => {
    setXValues([]);
    setYValues([]);
    fetch(`http://localhost:9111/api/stocks?data=${value}`)
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
        console.log(xValues.length, "Length x values");
        console.log(yValues.length, "Length y values");
        console.log(xValues, "x values");
        console.log(yValues, "y values");
        console.log(newXValues, "New x values");
      });
  }, [value]);
  return (
    <div>
      <h1>Stock</h1>
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
        layout={{ width: 640, height: 480, title: `${value}` }}
      />
    </div>
  );
}

export default Stock;

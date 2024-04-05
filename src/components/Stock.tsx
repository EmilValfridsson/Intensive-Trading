import React from "react";
import Plot from "react-plotly.js";

let StockSymbol = `TSLA`;

class Stock extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      xValues: [],
      yValues: [],
    };
  }

  componentDidMount(): void {
    this.fetchStock();
  }

  fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const API_KEY = `T2U4PBKMTOM4OVAV`;

    let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let xValuesFunction = [];
    let yValuesFunction = [];
    fetch(API_CALL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(function (data) {
        console.log(data);

        for (var key in data[`Time Series (Daily)`]) {
          xValuesFunction.push(key);
          yValuesFunction.push(data[`Time Series (Daily)`][key][`1. open`]);
        }
        pointerToThis.setState({
          xValues: xValuesFunction,
          yValues: yValuesFunction,
        });
      });
  }
  render() {
    return (
      <div>
        <h1>Stock</h1>
        <Plot
          data={[
            {
              x: this.state.xValues,
              y: this.state.yValues,
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "red" },
            },
          ]}
          layout={{ width: 640, height: 480, title: `${StockSymbol}` }}
        />
      </div>
    );
  }
}

export default Stock;

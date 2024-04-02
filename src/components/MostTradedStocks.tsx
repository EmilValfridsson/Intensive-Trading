export default function TradedStocks() {
  const stocks = ["Evolution", "SAAB B", "H&M B", "Company D", "Company E"];

  return (
    <div
      className="left-menu"
      style={{ marginRight: "auto", marginTop: "50px" }}
    >
      <ul
        className="m-8 menu bg-base-200 w-56 rounded-box"
        style={{ display: "grid", gap: "10px" }}
      >
        <li className="text-4xl menu-title">Mest omsatta aktier</li>
        {stocks.map((stocks, index) => (
          <li key={index} className="text-3xl">
            <a>{stocks}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

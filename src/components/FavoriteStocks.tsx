export default function FavoriteStocks() {
  const favoriteStocks = [
    "Nibe Industrier B",
    "SBB NORDEN B",
    "Electrolux A",
    "Alfa Laval",
  ];

  return (
    <div
      className="right-menu"
      style={{
        marginLeft: "auto",
        marginTop: "50px",
      }}
    >
      <ul
        className="m-8 menu bg-base-200 w-56 rounded-box"
        style={{
          display: "grid",
          gap: "10px",
          justifyItems: "start",
          height: "400px",
          overflowY: "scroll",
        }}
      >
        <li className="text-4xl menu-title">Favorit aktier</li>
        {favoriteStocks.map((stock, index) => (
          <li key={index} className="text-3xl" style={{ textAlign: "left" }}>
            <a> {stock} </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

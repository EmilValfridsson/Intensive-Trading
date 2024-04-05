export default function FavoriteStocks() {
  const favoriteStocks = [
    "Nibe Industrier B",
    "SBB NORDEN B",
    "Electrolux A",
    "Alfa Laval",
    "Alfa Laval",
    "Alfa Laval",
    "Alfa Laval",
  ];

  return (
    <div className="right-menu ml-auto mt-50">
      <ul
        className="m-8 menu bg-base-200 w-56 rounded-box h-400 overflow-y-scroll grid grid-cols-1 justify-start"
        style={{
          height: "400px",
        }}
      >
        <li className="text-4xl menu-title">Favorit aktier</li>
        {favoriteStocks.map((stock, index) => (
          <li key={index} className="text-3xl text-left">
            <a> {stock} </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

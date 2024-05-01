import { useSearchContext } from "../context/SearchContext";
import { useUserStocks } from "../hooks/useUserStocks";
import authService from "../services/authService";
import { deleteFavorite } from "../services/favoriteService";

export default function FavoriteStocks() {
  const { userStocks, setUserStocks } = useUserStocks();
  const { setSearchValue } = useSearchContext();

  function onDelete(ticker: string) {
    const token = authService.getJwt();
    if (!token) return;
    deleteFavorite(token, ticker);

    const newStocks = userStocks?.filter(
      (stock) => stock.favoriteTicker !== ticker
    );

    setUserStocks(newStocks);
  }

  return (
    <div className="right-menu ml-auto mt-50">
      <ul
        className="m-8 menu bg-base-200 w-56 rounded-box h-400 overflow-y-scroll grid grid-cols-1 justify-start"
        style={{
          height: "400px",
        }}
      >
        <li className="text-xl menu-title">Favorit aktier</li>
        {userStocks?.map((f) => (
          <li key={f.id} className=" text-base text-left">
            <div>
              <a onClick={() => setSearchValue(f.favoriteTicker)}>
                {f.favoriteTicker}
              </a>
              <div className="text-right">
                <a
                  className=" text-red-600"
                  onClick={() => onDelete(f.favoriteTicker)}
                >
                  X
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

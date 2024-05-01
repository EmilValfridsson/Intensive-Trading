import { useEffect } from "react";
import { useNewsContext } from "../context/NewsContext";
import { useSearchContext } from "../context/SearchContext";
import { getNews } from "../services/stockService";

export default function StockNews(): JSX.Element {
  const { stockNews, setStockNews } = useNewsContext();
  const { searchValue } = useSearchContext();

  useEffect(() => {
    async function fetch() {
      if (!searchValue) return null;
      const { data: news } = await getNews(searchValue);

      setStockNews(news);
    }
    fetch();
  }, [searchValue]);

  if (!stockNews) return <p>Loading...</p>;
  return (
    <div className="flex justify-center h-80">
      <ul className="bg-base-200 rounded-box w-full overflow-scroll">
        <div className="overflow-x-auto">
          <table className="table-sm">
            <tbody>
              {stockNews.feed.map((f) => (
                <tr key={f.url}>
                  <td>
                    <a
                      href={f.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(f.url, "_blank");
                      }}
                      style={{ color: "green", fontSize: "1.2em" }}
                    >
                      {f.title}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ul>
    </div>
  );
}

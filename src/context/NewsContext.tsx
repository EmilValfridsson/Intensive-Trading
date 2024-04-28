import { PropsWithChildren, createContext, useContext, useState } from "react";
import { IStockNews } from "../types";

interface INewsContext {
  stockNews: IStockNews | undefined;
  setStockNews(StockNews: IStockNews | undefined): void;
}

const NewsContext = createContext({} as INewsContext);

export default function NewsProvider({ children }: PropsWithChildren) {
  const [stockNews, setStockNews] = useState<IStockNews>();

  const value = { stockNews, setStockNews };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}

export function useNewsContext() {
  return useContext(NewsContext);
}

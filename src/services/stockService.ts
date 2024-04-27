import axios, { AxiosResponse } from "axios";
import { StockInfo, IStockNews } from "../types";

export interface TGLFormData {
  ticker: string;
  price: number;
  change_amount: number;
  change_percentage: number;
  volume: number;
  isFavored?: boolean;
}

const API_BASEURL = "http://localhost:9111/api/stocks";

export function getGainers() {
  return axios.get<TGLFormData[]>(`${API_BASEURL}/gainers`);
}

export function getStats(ticker: string) {
  return axios.get<StockInfo>(`${API_BASEURL}/stats/${ticker}`);
}

export async function getNews(
  ticker: string
): Promise<AxiosResponse<IStockNews>> {
  const response = await axios.get<IStockNews>(`${API_BASEURL}/news/${ticker}`);
  return response;
}

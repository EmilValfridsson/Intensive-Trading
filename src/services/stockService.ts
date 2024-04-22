import axios from "axios";

export interface TGLFormData {
  ticker: string;
  price: number;
  change_amount: number;
  change_percentage: number;
  volume: number;
  isFavored?: boolean;
}

const API_BASEURL = "http://localhost:9111/api/stocks";

export default function getGainers() {
  return axios.get<TGLFormData[]>(`${API_BASEURL}/gainers`);
}

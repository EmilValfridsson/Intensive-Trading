import axios from "axios";

export interface TGLFormData {
  ticker: string;
  price: number;
  change_amount: number;
  change_percentage: number;
  volume: number;
}
export interface TGLData {
  top_gainers: [];
  last_updated: string;
  top_losers: [];
}

const API_BASEURL = "http://localhost:9111/api/tgl";

export default function getTgl() {
  return axios.get<TGLFormData[]>(API_BASEURL);
}

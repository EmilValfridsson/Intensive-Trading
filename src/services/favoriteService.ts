import axios from "axios";

const API_BASEURL = "http://localhost:9111/api/favoritestocks";

export function addFavorite(ticker: string, token: string) {
  return axios.post(
    API_BASEURL,
    { ticker },
    {
      headers: { "x-auth-token": token },
    }
  );
}

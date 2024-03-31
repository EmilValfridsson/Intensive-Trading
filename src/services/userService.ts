import axios from "axios";
import authService from "./authService";

// const API_BASEURL = "https://server.intensivecode.se/api/users";

export interface UserRegister {
  name: string;
  username: string;
  password: string;
}

const API_BASEURL = "http://localhost:9111/api/users";

async function register(user: UserRegister) {
  const { headers, data } = await axios.post(API_BASEURL, user);
  const token = headers["x-auth-token"];
  authService.loginWithJwt(token);
  return data;
}

export default { register };

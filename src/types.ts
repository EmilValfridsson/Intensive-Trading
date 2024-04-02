export interface User {
  id: string;
  name: string;
  username: string;
  isAdmin: boolean;
}

export interface UserLogin {
  username: string;
  password: string;
}

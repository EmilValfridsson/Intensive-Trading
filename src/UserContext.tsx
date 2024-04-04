import { PropsWithChildren, createContext, useState } from "react";

const UserContext = createContext(null);

export default function UserProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState();
}

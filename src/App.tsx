import { Outlet } from "react-router-dom";
import UserProvider from "./UserContext";

function App() {
  return (
    <UserProvider>
      <Outlet />
    </UserProvider>
  );
}

export default App;

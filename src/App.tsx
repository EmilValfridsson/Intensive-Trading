import { Outlet } from "react-router-dom";
import UserProvider from "./UserContext";
import NavBar from "./components/NavBar";
import SearchProvider from "./SearchContext";

function App() {
  return (
    <SearchProvider>
      <UserProvider>
        <NavBar />
        <Outlet />
      </UserProvider>
    </SearchProvider>
  );
}

export default App;

// onSearch={handleSearch}

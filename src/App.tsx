import { Outlet } from "react-router-dom";
import UserProvider from "./context/UserContext";
import NavBar from "./components/NavBar";
import SearchProvider from "./context/SearchContext";
import StatsProvider from "./context/StatsContext";

function App() {
  return (
    <StatsProvider>
      <SearchProvider>
        <UserProvider>
          <NavBar />
          <Outlet />
        </UserProvider>
      </SearchProvider>
    </StatsProvider>
  );
}

export default App;

// onSearch={handleSearch}

import { Outlet } from "react-router-dom";
import UserProvider from "./context/UserContext";
import NavBar from "./components/NavBar";
import SearchProvider from "./context/SearchContext";
import StatsProvider from "./context/StatsContext";
import NewsProvider from "./context/NewsContext";
import UserStocksProvider from "./context/UserStocksContext";

function App() {
  return (
    <UserStocksProvider>
      <NewsProvider>
        <StatsProvider>
          <SearchProvider>
            <UserProvider>
              <NavBar />
              <Outlet />
            </UserProvider>
          </SearchProvider>
        </StatsProvider>
      </NewsProvider>
    </UserStocksProvider>
  );
}

export default App;

// onSearch={handleSearch}

import { Outlet } from "react-router-dom";
import UserProvider from "./context/UserContext";
import NavBar from "./components/NavBar";
import SearchProvider from "./context/SearchContext";
import StatsProvider from "./context/StatsContext";
import NewsProvider from "./context/NewsContext";

function App() {
  return (
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
  );
}

export default App;

// onSearch={handleSearch}

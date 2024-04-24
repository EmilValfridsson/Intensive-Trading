import { Outlet } from "react-router-dom";
import UserProvider from "./context/UserContext";
import NavBar from "./components/NavBar";
import SearchProvider from "./context/SearchContext";

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

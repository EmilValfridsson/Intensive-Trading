import { Link } from "react-router-dom";
import { useUserContext } from "../UserContext";
import { useSearchContext } from "../SearchConxtext";

function NavBar() {
  const { user } = useUserContext();
  const { searchValue, handleInputChange } = useSearchContext();

  const handleSearch = () => {
    console.log("Searching for:", searchValue);
  };

  return (
    <div className="p-4">
      <div className="navbar bg-base-100 shadow rounded-lg">
        <div className="navbar-start">
          <Link to="" className="btn btn-ghost text-xl ">
            Home
          </Link>
          {user && (
            <>
              <Link className="btn btn-ghost text-xl " to="/profile">
                {user.name}
              </Link>

              <Link className="btn btn-ghost text-xl " to="/logout">
                Logout
              </Link>
            </>
          )}
          {!user && (
            <>
              <Link className="btn btn-ghost text-xl " to="/login">
                Login
              </Link>

              <Link className="btn btn-ghost text-xl " to="/registerpage">
                Register
              </Link>
            </>
          )}
        </div>
        <div className="navbar-center">
          <h1 className="text-3xl">Intensive-Trading</h1>
        </div>
        <div className="navbar-end">
          <div className="form-control">
            <input
              type="text"
              className="input input-bordered w-24 md:w-auto"
              placeholder="Search..."
              value={searchValue}
              onChange={handleInputChange}
            />
            <button className="btn" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

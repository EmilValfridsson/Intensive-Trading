import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import authService from "../services/authService";

export interface User {
  id: string;
  name: string;
  username: string;
  isAdmin: boolean;
}

function NavBar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const user = authService.getCurrentUser();

    setUser(user);
  }, []);
  return (
    <div className="p-4">
      <div className="navbar bg-base-100 shadow rounded-lg">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-xl ">
            Home
          </Link>
          {user && (
            <>
              <li className="nav-item">
                <Link className="btn btn-ghost text-xl " to="/profile">
                  {user.name}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-ghost text-xl " to="/logout">
                  Logout
                </Link>
              </li>
            </>
          )}
          {!user && (
            <>
              <li className="nav-item">
                <Link className="btn btn-ghost text-xl " to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-ghost text-xl " to="/registerpage">
                  Register
                </Link>
              </li>
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
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

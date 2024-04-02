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
          <Link to="/mainpage" className="btn btn-ghost text-xl ">
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

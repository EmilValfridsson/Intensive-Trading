import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="p-4">
      <div className="navbar bg-base-100 shadow rounded-lg">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost text-xl ">
            Home
          </Link>
          <Link to="/" className="btn btn-ghost text-xl ">
            Login
          </Link>

          <Link to="/" className="btn btn-ghost text-xl ">
            Register
          </Link>
          <Link to="profile" className="btn btn-ghost text-xl ">
            Profile
          </Link>
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

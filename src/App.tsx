import { NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <button className="btn btn-secondary hover:scale-110 cursor-pointer transition-transform ease-in-out">
          Intensive-Trading
        </button>
      </div>
      <div>
        <NavLink className="nav-link" to="/registerpage">
          Register
        </NavLink>
      </div>
    </div>
  );
}

export default App;

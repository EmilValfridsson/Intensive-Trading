import auth from "../services/authService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    auth.logout();
    navigate("/");
  }, []);

  return <></>;
}

export default Logout;

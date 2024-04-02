import { Navigate, Outlet, useLocation } from "react-router";
import authService from "../services/authService";

function ProtectedRoute() {
  const user = authService.getCurrentUser();
  const location = useLocation();
  if (!user) return <Navigate to="/login" state={location.pathname} />;

  return <Outlet />;
}

export default ProtectedRoute;

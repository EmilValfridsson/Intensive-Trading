import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/LoginPage";
import Logout from "./components/Logout";


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/registerpage", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/logout", element: <Logout /> },

]);

export default router;
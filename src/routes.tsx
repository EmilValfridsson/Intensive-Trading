import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginPage from "./pages/LoginPage";
import Logout from "./components/Logout";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import MainPage from "./pages/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "registerpage", element: <RegisterPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "logout", element: <Logout /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
]);

export default router;

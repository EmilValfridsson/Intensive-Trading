import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "profile", element: <ProfilePage /> }],
  },
  { path: "/registerpage", element: <RegisterPage /> },
]);

export default router;

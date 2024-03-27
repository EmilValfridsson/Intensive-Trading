import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/registerpage", element: <RegisterPage /> },

]);

export default router;
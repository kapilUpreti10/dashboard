import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/Home";
import Signup from "./pages/Signup";
import BooksPage from "./pages/BooksList";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import Landing from "./pages/Landing";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "books",
        element: <BooksPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

export default Router;

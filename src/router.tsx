import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/Home";
import Signup from "./pages/Signup";
import BooksPage from "./pages/BooksList";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import Landing from "./pages/Landing";

import ProtectedRoute from "./components/ProtectedRoute";
import Redirect from "./my-components/Redirect";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Redirect />,
    children: [
      {
        path: "",
        element: <Landing />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <Navigate to="/dashboard/home" />,
      },

      {
        path: "",
        element: <DashboardLayout />, // Nested layout
        children: [
          {
            path: "home",
            element: <HomePage />,
            // outletName: "main",
          },
          {
            path: "books",
            element: <BooksPage />,
            // outletName: "hello",
          },
        ],
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

// for multiple <outlet> in a single page we can give name to the outlet

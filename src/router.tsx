import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/Home";
import Signup from "./pages/Signup";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import Landing from "./pages/Landing";

import ProtectedRoute from "./components/ProtectedRoute";
import Redirect from "./my-components/Redirect";

import ErrorPage from "./utils/ErrorPage";
import MoviesPage from "./pages/Movies";

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
            path: "movies",
            element: <MoviesPage />,
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
  {
    path: "*",
    element: (
      <ErrorPage
        errorTittle="Invalid Route"
        errorMessage="Sry the given route cannot be found"
      />
    ),
  },
]);

export default Router;

// for multiple <outlet> in a single page we can give name to the outlet

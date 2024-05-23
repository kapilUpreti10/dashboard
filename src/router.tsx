import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/Home";
import Signup from "./pages/Signup";
import BooksPage from "./pages/BooksList";
import DashboardLayout from "./layouts/DashboardLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/books",
        element: <BooksPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default Router;
